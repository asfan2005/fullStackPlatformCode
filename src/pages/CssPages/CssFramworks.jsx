import React, { useState } from "react";

function CssFramworks() {
  const frameworkInfo = {
    bootstrap: {
      title: "Bootstrap 5",
      description: "Twitter tomonidan yaratilgan eng mashhur CSS frameworki. 2011-yildan beri front-end ishlanmalarida yetakchi o'rinni egallab kelmoqda. Bootstrap yordamida responsive, mobile-first loyihalarni tez va oson yaratish mumkin.",
      features: [
        "Responsive Grid System - 12 ustunli tizim",
        "Tayyor UI Komponentlar (400+ komponent)",
        "JavaScript Plaghinlar va Interaktiv elementlar",
        "Keng Hamjamiyat va Documentation",
        "SASS/SCSS customization",
        "Flexbox va Grid qo'llab-quvvatlash",
        "Built-in Icons kutubxonasi",
        "Cross-browser moslashuvchanlik"
      ],
      examples: {
        grid: `<!-- Bootstrap Grid System -->
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="p-3 bg-primary text-white">Column 1</div>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="p-3 bg-secondary text-white">Column 2</div>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="p-3 bg-success text-white">Column 3</div>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="p-3 bg-danger text-white">Column 4</div>
    </div>
  </div>
</div>`,
        card: `<!-- Bootstrap Cards with Different Styles -->
<div class="container">
  <div class="row g-4">
    <!-- Simple Card -->
    <div class="col-md-4">
      <div class="card">
        <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
    <!-- Card with List -->
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
    </div>

    <!-- Card with Footer -->
    <div class="col-md-4">
      <div class="card text-center">
        <div class="card-header">
          Special Card
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below.</p>
          <button class="btn btn-outline-primary">Action</button>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
    </div>
  </div>
</div>`,
        navbar: `<!-- Bootstrap Modern Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Brand
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`,
        forms: `<!-- Bootstrap Forms -->
<div class="container">
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-6">
      <label for="firstName" class="form-label">First name</label>
      <input type="text" class="form-control" id="firstName" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last name</label>
      <input type="text" class="form-control" id="lastName" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-12">
      <label for="email" class="form-label">Email</label>
      <div class="input-group">
        <span class="input-group-text">@</span>
        <input type="email" class="form-control" id="email" required>
      </div>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="terms">
        <label class="form-check-label" for="terms">
          Agree to terms and conditions
        </label>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
</div>`
      },
      realExamples: {
        buttons: {
          code: `<div class="d-flex gap-2">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
</div>`,
          title: "Bootstrap Buttons"
        },
        alerts: {
          code: `<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>`,
          title: "Bootstrap Alerts"
        }
      }
    },
    tailwind: {
      title: "Tailwind CSS",
      description: "Utility-first CSS frameworki bo'lib, HTML ichida to'g'ridan-to'g'ri styling qilish imkonini beradi. Tailwind CSS 2019-yildan beri front-end developmentda inqilob yaratdi va hozirda eng tez rivojlanayotgan CSS frameworklaridan biri.",
      features: [
        "Utility-First Yondashuv - har bir CSS xususiyati uchun alohida class",
        "JIT (Just-In-Time) Kompilyator - faqat ishlatilgan classlar compile qilinadi",
        "To'liq Moslashuvchan Dizayn Tizimi",
        "Dark Mode qo'llab-quvvatlash",
        "Responsive Dizayn uchun maxsus prefixlar",
        "Custom Animatsiyalar",
        "Plugin Arxitekturasi",
        "PostCSS bilan integratsiya"
      ],
      examples: {
        grid: `<!-- Tailwind Modern Grid Layout -->
<div class="container mx-auto p-4">
  <!-- Basic Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="p-4 bg-blue-500 text-white rounded-lg shadow-md">Column 1</div>
    <div class="p-4 bg-purple-500 text-white rounded-lg shadow-md">Column 2</div>
    <div class="p-4 bg-green-500 text-white rounded-lg shadow-md">Column 3</div>
    <div class="p-4 bg-red-500 text-white rounded-lg shadow-md">Column 4</div>
  </div>
  
  <!-- Advanced Grid -->
  <div class="grid grid-cols-12 gap-4 mt-8">
    <div class="col-span-12 md:col-span-8 lg:col-span-9">
      <div class="p-6 bg-gray-100 rounded-xl shadow-lg">
        Main Content Area
      </div>
    </div>
    <div class="col-span-12 md:col-span-4 lg:col-span-3">
      <div class="p-6 bg-gray-100 rounded-xl shadow-lg">
        Sidebar Area
      </div>
    </div>
  </div>
</div>`,
        card: `<!-- Tailwind Modern Cards -->
<div class="container mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Feature Card -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div class="relative">
        <img src="https://picsum.photos/400/200" class="w-full h-48 object-cover" alt="">
        <div class="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          New
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Feature Card</h3>
        <p class="text-gray-600 mb-4">This is a feature card with modern design.</p>
        <div class="flex justify-between items-center">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
            Learn More
          </button>
          <span class="text-gray-500 text-sm">5 min read</span>
        </div>
      </div>
    </div>

    <!-- Profile Card -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="p-6">
        <div class="flex items-center space-x-4">
          <img src="https://picsum.photos/100" class="w-16 h-16 rounded-full" alt="">
          <div>
            <h3 class="text-lg font-semibold text-gray-800">John Doe</h3>
            <p class="text-gray-600">Senior Developer</p>
          </div>
        </div>
        <div class="mt-4 flex justify-between">
          <div class="text-center">
            <span class="block text-2xl font-bold text-gray-800">52</span>
            <span class="text-gray-600 text-sm">Posts</span>
          </div>
          <div class="text-center">
            <span class="block text-2xl font-bold text-gray-800">180</span>
            <span class="text-gray-600 text-sm">Following</span>
          </div>
          <div class="text-center">
            <span class="block text-2xl font-bold text-gray-800">643</span>
            <span class="text-gray-600 text-sm">Followers</span>
          </div>
        </div>
        <button class="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
          Follow
        </button>
      </div>
    </div>

    <!-- Pricing Card -->
    <div class="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden text-white">
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-2">Premium Plan</h3>
        <div class="text-4xl font-bold mb-6">$29<span class="text-lg font-normal">/month</span></div>
        <ul class="space-y-3 mb-6">
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            Unlimited Access
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            Premium Support
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            Advanced Features
          </li>
        </ul>
        <button class="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-opacity-90 transition-opacity duration-300 font-semibold">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>`,
        navbar: `<!-- Tailwind Modern Navbar -->
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      <!-- Logo Section -->
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="h-8 w-auto" src="logo.svg" alt="Logo">
        </div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex md:items-center md:ml-10 space-x-4">
          <a href="#" class="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" class="text-gray-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Products</a>
          <a href="#" class="text-gray-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#" class="text-gray-500 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
      
      <!-- Right Side Menu -->
      <div class="flex items-center space-x-4">
        <div class="hidden md:flex items-center space-x-2">
          <button class="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
          <button class="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Sign In
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button class="p-2 rounded-md hover:bg-gray-100">
            <svg class="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Mobile Menu Panel -->
  <div class="hidden md:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50">Home</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Products</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Services</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Contact</a>
    </div>
  </div>
</nav>`,
        forms: `<!-- Tailwind Modern Form -->
<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
          sign in to your existing account
        </a>
      </p>
    </div>
    <form class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input id="email" name="email" type="email" required 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input id="password" name="password" type="password" required 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-blue-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
            </svg>
          </span>
          Sign up
        </button>
      </div>
    </form>
  </div>
</div>`
      },
      realExamples: {
        buttons: {
          code: `<div class="flex gap-2">
  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Primary
  </button>
  <button class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
    Secondary
  </button>
  <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
    Success
  </button>
</div>`,
          title: "Tailwind Buttons"
        },
        alerts: {
          code: `<div class="p-4 mb-4 text-blue-700 bg-blue-100 rounded-lg">
  Primary Alert Message
</div>
<div class="p-4 mb-4 text-green-700 bg-green-100 rounded-lg">
  Success Alert Message
</div>
<div class="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
  Danger Alert Message
</div>`,
          title: "Tailwind Alerts"
        }
      }
    },
    foundation: {
      title: "Foundation",
      description: "ZURB tomonidan yaratilgan professional darajadagi responsive frontend frameworki.",
      features: ["Professional Grid", "Semantic UI", "Email Framework", "Responsive Dizayn"],
      examples: {
        grid: `<!-- Foundation Grid -->
<div class="grid-container">
  <div class="grid-x grid-margin-x">
    <div class="cell small-4">Column 1</div>
    <div class="cell small-4">Column 2</div>
    <div class="cell small-4">Column 3</div>
  </div>
</div>`,
        card: `<!-- Foundation Card -->
<div class="card" style="width: 300px;">
  <img src="...">
  <div class="card-section">
    <h4>Card Title</h4>
    <p>Card content goes here.</p>
    <button class="button">Click Me</button>
  </div>
</div>`,
        navbar: `<!-- Foundation Navigation -->
<div class="top-bar">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Site Title</li>
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
    </ul>
  </div>
</div>`
      }
    }
  };

  const [activeTab, setActiveTab] = useState('bootstrap');
  const [activeExample, setActiveExample] = useState('grid');
  const [activeRealExample, setActiveRealExample] = useState('buttons');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              CSS Frameworks
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Zamonaviy CSS frameworklari bilan tanishing va loyihalaringizni yanada samaraliroq yarating
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide py-2 sm:py-4 px-2 sm:px-4 md:px-6 space-x-2 sm:space-x-4 md:space-x-6">
            {Object.keys(frameworkInfo).map((framework) => (
              <button
                key={framework}
                className={`whitespace-nowrap px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-colors ${
                  activeTab === framework
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => setActiveTab(framework)}
              >
                {frameworkInfo[framework].title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Framework Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                {frameworkInfo[activeTab].title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {frameworkInfo[activeTab].description}
              </p>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Asosiy Xususiyatlar:
              </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                {frameworkInfo[activeTab].features.map((feature, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Code Examples */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {Object.keys(frameworkInfo[activeTab].examples).map((example) => (
                <button
                  key={example}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base ${
                    activeExample === example
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveExample(example)}
                >
                  {example.charAt(0).toUpperCase() + example.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6">
              <pre className="overflow-x-auto text-xs sm:text-sm md:text-base">
                <code className="language-html">
                  {frameworkInfo[activeTab].examples[activeExample]}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Real Examples Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          Real Examples
        </h2>
        
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          {frameworkInfo[activeTab].realExamples &&
            Object.keys(frameworkInfo[activeTab].realExamples).map((example) => (
              <button
                key={example}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base ${
                  activeRealExample === example
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setActiveRealExample(example)}
              >
                {example.charAt(0).toUpperCase() + example.slice(1)}
              </button>
            ))}
        </div>

        {frameworkInfo[activeTab].realExamples && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Code Section */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                Code:
              </h3>
              <pre className="overflow-x-auto text-xs sm:text-sm md:text-base">
                <code className="language-html">
                  {frameworkInfo[activeTab].realExamples[activeRealExample].code}
                </code>
              </pre>
            </div>

            {/* Result Section */}
            <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 border">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Result:
              </h3>
              <div className="p-3 sm:p-4 border rounded-lg">
                <div
                  className="overflow-x-auto"
                  dangerouslySetInnerHTML={{
                    __html: frameworkInfo[activeTab].realExamples[activeRealExample].code,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 mt-8 sm:mt-12 md:mt-16 py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
              Qo'shimcha Resurslar
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              CSS frameworklari haqida ko'proq o'rganish uchun rasmiy dokumentatsiyalarni o'qing
            </p>
            <div className="flex justify-center gap-4 mt-4 sm:mt-6">
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm sm:text-base"
              >
                Bootstrap Docs
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm sm:text-base"
              >
                Tailwind Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssFramworks;
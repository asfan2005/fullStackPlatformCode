import React from "react";

function CssBorders() {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      {/* Main heading responsive */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">
        CSS Border Examples
      </h1>

      {/* Basic Borders */}
      <section className="mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Basic Borders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Example 1: Basic Border */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Basic Border</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-blue-50 flex items-center justify-center border-2 border-blue-500">
              <span className="text-sm sm:text-base text-blue-600">border-2 border-blue-500</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-2 border-blue-500"
            </pre>
          </div>

          {/* Example 2: Colored Border */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Colored Border</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-green-50 flex items-center justify-center border-4 border-green-500">
              <span className="text-sm sm:text-base text-green-600">border-4 border-green-500</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-4 border-green-500"
            </pre>
          </div>

          {/* Example 3: Dashed Border */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Dashed Border</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-purple-50 flex items-center justify-center border-2 border-dashed border-purple-500">
              <span className="text-sm sm:text-base text-purple-600">border-dashed</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-2 border-dashed border-purple-500"
            </pre>
          </div>
        </div>
      </section>

      {/* Border Radius Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Border Radius</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example 1: Small Radius */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Small Radius</h3>
            <div className="mb-4 h-32 bg-indigo-50 flex items-center justify-center border-2 border-indigo-500 rounded-sm">
              <span className="text-indigo-600">rounded-sm</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              className="rounded-sm"
            </pre>
          </div>

          {/* Example 2: Medium Radius */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Medium Radius</h3>
            <div className="mb-4 h-32 bg-pink-50 flex items-center justify-center border-2 border-pink-500 rounded-md">
              <span className="text-pink-600">rounded-md</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              className="rounded-md"
            </pre>
          </div>

          {/* Example 3: Large Radius */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Large Radius</h3>
            <div className="mb-4 h-32 bg-yellow-50 flex items-center justify-center border-2 border-yellow-500 rounded-lg">
              <span className="text-yellow-600">rounded-lg</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              className="rounded-lg"
            </pre>
          </div>

          {/* Example 4: Full Round */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Full Round</h3>
            <div className="mb-4 h-32 w-32 mx-auto bg-red-50 flex items-center justify-center border-2 border-red-500 rounded-full">
              <span className="text-red-600">rounded-full</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              className="rounded-full"
            </pre>
          </div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Special Effects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Example 1: Hover Effect */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Hover Effect</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-gray-50 flex items-center justify-center border-2 border-gray-300 rounded transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
              <span className="text-sm sm:text-base text-gray-600">Hover me!</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-2 transition-all hover:border-blue-500"
            </pre>
          </div>

          {/* Example 2: Gradient Border */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Gradient Border</h3>
            <div className="mb-3 sm:mb-4 relative h-24 sm:h-28 md:h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg p-[2px]">
                <div className="h-full w-full bg-white rounded-lg flex items-center justify-center">
                  <span className="text-sm sm:text-base text-gray-600">Gradient Border</span>
                </div>
              </div>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              {`<div className="bg-gradient-to-r from-pink-500 to-blue-500 p-[2px] rounded-lg">`}
            </pre>
          </div>

          {/* Example 3: Double Border */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Double Border</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-emerald-50 flex items-center justify-center border-4 border-double border-emerald-500">
              <span className="text-sm sm:text-base text-emerald-600">Double Border</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-4 border-double"
            </pre>
          </div>

          {/* Custom Border Styles */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Mixed Borders</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-cyan-50 flex items-center justify-center border-l-4 border-t-4 border-cyan-500">
              <span className="text-sm sm:text-base text-cyan-600">Mixed Borders</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-l-4 border-t-4"
            </pre>
          </div>

          {/* Example 2: Border with Shadow */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Border with Shadow</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-orange-50 flex items-center justify-center border-2 border-orange-500 shadow-lg">
              <span className="text-sm sm:text-base text-orange-600">Border + Shadow</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-2 shadow-lg"
            </pre>
          </div>

          {/* Example 3: Responsive Border */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Responsive Border</h3>
            <div className="mb-3 sm:mb-4 h-24 sm:h-28 md:h-32 bg-violet-50 flex items-center justify-center border-2 sm:border-4 md:border-8 border-violet-500">
              <span className="text-sm sm:text-base text-violet-600">Responsive Width</span>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              className="border-2 sm:border-4 md:border-8"
            </pre>
          </div>

          {/* Yangi namuna 1: Animated Gradient Border */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Animated Gradient Border</h3>
            <div className="mb-3 sm:mb-4 relative h-24 sm:h-28 md:h-32 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6] rounded-lg p-[2px] bg-[length:200%_100%] animate-gradientFlow">
                <div className="h-full w-full bg-white rounded-lg flex items-center justify-center">
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-purple-600 transition-colors">
                    Hover me!
                  </span>
                </div>
              </div>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              {`<div className="bg-gradient-to-r from-[#4776E6] via-[#8E54E9] to-[#4776E6] 
  bg-[length:200%_100%] animate-gradientFlow">`}
            </pre>
          </div>

          {/* Yangi namuna 2: Interactive Border Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Interactive Border Card</h3>
            <div className="mb-3 sm:mb-4 relative group">
              <div className="h-24 sm:h-28 md:h-32 bg-white rounded-lg border-2 border-transparent 
                  bg-gradient-to-r p-[2px] from-teal-500 via-purple-500 to-pink-500 
                  transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6] 
                  hover:scale-[1.01]">
                <div className="h-full w-full bg-white rounded-md flex items-center justify-center p-3 sm:p-4 hover:bg-gray-50">
                  <span className="text-sm sm:text-base bg-gradient-to-r from-teal-500 via-purple-500 
                    to-pink-500 bg-clip-text text-transparent font-semibold">
                    Interactive Card
                  </span>
                </div>
              </div>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              {`<div className="border-2 border-transparent bg-gradient-to-r 
  from-teal-500 via-purple-500 to-pink-500 
  hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6] 
  hover:scale-[1.01]">`}
            </pre>
          </div>

          {/* 1-Namuna: Hover Effect Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Hover Effect Card</h3>
            <div className="mb-3 sm:mb-4">
              {/* Card Container */}
              <div className="group relative w-full h-48 bg-white rounded-xl border border-gray-200 p-1 transition-all duration-300 hover:border-transparent">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                
                {/* Card Content */}
                <div className="relative h-full w-full bg-white rounded-lg p-4 flex flex-col items-center justify-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Hover Card</h4>
                  <p className="text-gray-600 text-center">Hover to see the effect</p>
                </div>
              </div>
            </div>
            
            {/* Code Example */}
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              {`<div className="group relative hover:border-transparent">
  <div className="absolute -inset-0.5 bg-gradient-to-r 
    from-pink-600 to-purple-600 opacity-0 
    group-hover:opacity-100 blur">
  </div>
  <div className="relative bg-white">
    Content
  </div>
</div>`}
            </pre>
          </div>

          {/* 2-Namuna: Interactive Border Button */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Interactive Border Button</h3>
            <div className="mb-3 sm:mb-4 space-y-4">
              {/* Button Container */}
              <button className="group relative inline-flex items-center justify-center p-1 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
                {/* Button Content */}
                <span className="relative px-6 py-3 bg-white rounded-md text-gray-800 font-medium transition-all duration-300 group-hover:bg-opacity-90 group-hover:text-white">
                  Interactive Button
                </span>
              </button>

              {/* Second Button Variant */}
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-purple-500 p-4 font-medium text-purple-500 hover:text-white transition duration-300 ease-out">
                <span className="absolute inset-0 flex h-full w-full -translate-x-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
                <span className="relative">Slide Effect Button</span>
              </button>
            </div>

            {/* Code Example */}
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm overflow-x-auto">
              {`<!-- Button 1 -->
<button className="group relative bg-gradient-to-br 
  from-blue-500 via-purple-500 to-pink-500">
  <span className="relative px-6 py-3 bg-white 
    group-hover:bg-opacity-90">
    Button Text
  </span>
</button>

<!-- Button 2 -->
<button className="group border-2 border-purple-500">
  <span className="absolute inset-0 -translate-x-full 
    bg-gradient-to-r from-purple-500 to-pink-500 
    group-hover:translate-x-0">
  </span>
  <span className="relative">Button Text</span>
</button>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CssBorders;
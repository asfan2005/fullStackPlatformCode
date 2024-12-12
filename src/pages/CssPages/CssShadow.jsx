import React from "react";

function CssShadow() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <div className="w-full text-center mb-16 bg-gradient-to-b from-gray-50 to-white py-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          CSS Shadow Effects
        </h1>

        <div className="w-full max-w-5xl mx-auto px-4">
          <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
            CSS Shadow effects are powerful tools for adding depth, dimension,
            and visual interest to web elements. From subtle depth to dramatic
            3D effects, shadows can transform flat designs into engaging
            interfaces.
          </p>

          {/* Detailed Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                What are CSS Shadows?
              </h2>
              <p className="text-gray-600">
                CSS shadows are visual effects that create the illusion of
                elevation and depth. They can be applied to any HTML element
                using the box-shadow property, or to text using text-shadow.
                Shadows help establish visual hierarchy and improve user
                experience by providing depth cues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Why Use Shadows?
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Create depth and dimension in flat designs</li>
                <li>Improve visual hierarchy and element relationships</li>
                <li>Enhance user interface feedback and interactions</li>
                <li>Add professional polish to web applications</li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">
                Types of Shadows
              </h3>
              <ul className="text-blue-700 space-y-2">
                <li>• Box Shadows</li>
                <li>• Text Shadows</li>
                <li>• Drop Shadows</li>
                <li>• Inner Shadows</li>
                <li>• Layered Shadows</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Properties</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Offset (X/Y)</li>
                <li>• Blur Radius</li>
                <li>• Spread Radius</li>
                <li>• Color & Opacity</li>
                <li>• Inset Option</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">
                Advanced Techniques
              </h3>
              <ul className="text-purple-700 space-y-2">
                <li>• Multiple Shadows</li>
                <li>• Animated Shadows</li>
                <li>• Gradient Shadows</li>
                <li>• 3D Effects</li>
                <li>• Neon Glows</li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gray-50 p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Do's:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Use shadows to indicate elevation levels</li>
                  <li>Keep shadows subtle and consistent</li>
                  <li>Consider light source direction</li>
                  <li>Test shadows across different backgrounds</li>
                  <li>Optimize performance with hardware acceleration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Don'ts:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Overuse shadows on every element</li>
                  <li>Create unrealistic lighting effects</li>
                  <li>Ignore mobile performance impact</li>
                  <li>Use shadows that are too harsh or dark</li>
                  <li>Mix different shadow styles inconsistently</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Browser Support */}
          <div className="bg-yellow-50 p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Browser Support
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <p className="font-semibold text-yellow-700">Chrome</p>
                <p className="text-yellow-600">Version 10+</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-yellow-700">Firefox</p>
                <p className="text-yellow-600">Version 4+</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-yellow-700">Safari</p>
                <p className="text-yellow-600">Version 5.1+</p>
              </div>
              <div className="text-center p-4">
                <p className="font-semibold text-yellow-700">Edge</p>
                <p className="text-yellow-600">All Versions</p>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors">
              Basic Shadows
            </button>
            <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
              Advanced Effects
            </button>
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors">
              Animation Examples
            </button>
            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-colors">
              Code Snippets
            </button>
          </div>

          {/* Pro Tips Alert */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              💡 Pro Tips for Shadow Effects
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start space-x-2">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Use subtle shadows for depth without overwhelming the design
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Combine multiple shadows for more complex effects</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Consider performance when using animated shadows</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Test shadows across different screen sizes and devices
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {/* Basic Shadow */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Basic Shadow
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),
            0 2px 4px -1px rgba(0,0,0,0.06);
            
hover:
box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),
            0 10px 10px -5px rgba(0,0,0,0.04);`}
          </pre>
          <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
        </div>

        {/* Colored Shadow */}
        <div className="bg-white p-8 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Colored Shadow
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`box-shadow: 0 0 15px rgba(59,130,246,0.5);

hover:
box-shadow: 0 0 30px rgba(59,130,246,0.8);`}
          </pre>
          <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
        </div>

        {/* Layered Shadow */}
        <div
          className="bg-white p-8 rounded-xl shadow-[5px_5px_0px_0px_rgba(109,40,217),10px_10px_0px_0px_rgba(147,51,234)] 
                      hover:shadow-[10px_10px_0px_0px_rgba(109,40,217),15px_15px_0px_0px_rgba(147,51,234)] 
                      transition-all duration-300"
        >
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Layered Shadow
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`box-shadow: 5px 5px 0px 0px rgba(109,40,217),
            10px 10px 0px 0px rgba(147,51,234);

hover:
box-shadow: 10px 10px 0px 0px rgba(109,40,217),
            15px 15px 0px 0px rgba(147,51,234);`}
          </pre>
          <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg"></div>
        </div>

        {/* Inner Shadow */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Inner Shadow
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.2);

hover:
box-shadow: inset 0 4px 8px 0 rgba(0,0,0,0.3);`}
          </pre>
          <div
            className="w-full h-32 bg-gray-100 rounded-lg shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] 
                         hover:shadow-[inset_0_4px_8px_0_rgba(0,0,0,0.3)] transition-shadow duration-300"
          ></div>
        </div>
        {/* Glowing Shadow */}
        <div className="bg-white p-8 rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Glowing Effect
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`box-shadow: 0 0 15px rgba(236,72,153,0.3);

@keyframes glow {
  from { box-shadow: 0 0 15px rgba(236,72,153,0.3); }
  to { box-shadow: 0 0 30px rgba(236,72,153,0.6); }
}`}
          </pre>
          <div className="w-full h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg animate-[glow_2s_ease-in-out_infinite_alternate]"></div>
        </div>

        {/* 3D Shadow */}
        <div
          className="bg-white p-8 rounded-xl shadow-[0_10px_0_0_rgba(0,0,0,0.1),0_4px_0_0_rgba(0,0,0,0.1)]
                      hover:shadow-[0_14px_0_0_rgba(0,0,0,0.1),0_6px_0_0_rgba(0,0,0,0.1)]
                      active:translate-y-2 active:shadow-[0_8px_0_0_rgba(0,0,0,0.1),0_2px_0_0_rgba(0,0,0,0.1)]
                      transition-all duration-150"
        >
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            3D Button Effect
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`box-shadow: 0 10px 0 0 rgba(0,0,0,0.1),
            0 4px 0 0 rgba(0,0,0,0.1);

hover:
box-shadow: 0 14px 0 0 rgba(0,0,0,0.1),
            0 6px 0 0 rgba(0,0,0,0.1);

active:
transform: translateY(2px);
box-shadow: 0 8px 0 0 rgba(0,0,0,0.1),
            0 2px 0 0 rgba(0,0,0,0.1);`}
          </pre>
          <div className="w-full h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
        </div>

        {/* Neon Shadow */}
        <div className="bg-white p-8 rounded-xl shadow-lg group">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Neon Shadow
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`@keyframes neonPulse {
  0% { box-shadow: 0 0 5px #fff,
                   0 0 10px #fff,
                   0 0 15px #0ff,
                   0 0 20px #0ff,
                   0 0 25px #0ff; }
  100% { box-shadow: 0 0 10px #fff,
                     0 0 20px #fff,
                     0 0 30px #0ff,
                     0 0 40px #0ff,
                     0 0 50px #0ff; }
}`}
          </pre>
          <div
            className="w-full h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg
                          animate-[neonPulse_1.5s_ease-in-out_infinite_alternate]"
          ></div>
        </div>

        {/* Rainbow Shadow */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Rainbow Shadow
          </h3>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap break-words border border-gray-200 mb-4">
            {`@keyframes rainbowShadow {
  0% { box-shadow: 0 0 20px rgba(255,0,0,0.7); }
  25% { box-shadow: 0 0 20px rgba(255,165,0,0.7); }
  50% { box-shadow: 0 0 20px rgba(255,255,0,0.7); }
  75% { box-shadow: 0 0 20px rgba(0,128,0,0.7); }
  100% { box-shadow: 0 0 20px rgba(75,0,130,0.7); }
}`}
          </pre>
          <div
            className="w-full h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg
                          animate-[rainbowShadow_5s_linear_infinite]"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CssShadow;

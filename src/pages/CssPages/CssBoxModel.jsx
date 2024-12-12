import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CssBoxModel() {
  // State'larni boshqarish
  const [activeTab, setActiveTab] = useState('visualizer');
  const [userCode1, setUserCode1] = useState(`/* 1-Topshiriq uchun CSS kodingizni yozing */
.box {
  /* Sizning kodingiz */
}`);
  const [userCode2, setUserCode2] = useState(`/* 2-Topshiriq uchun CSS kodingizni yozing */
.advanced-box {
  /* Sizning kodingiz */
}`);

  // Box Model namuna kodlari
  const boxModelExamples = {
    content: `/* Content Example */
.box {
  width: 200px;
  height: 100px;
  background: #4f46e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    padding: `/* Padding Example */
.box {
  padding: 20px;
  /* Alohida tomonlar uchun */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}`,
    border: `/* Border Example */
.box {
  border: 2px solid #4f46e5;
  /* Alohida tomonlar uchun */
  border-top: 2px solid #4f46e5;
  border-right: 2px dashed #4f46e5;
  border-bottom: 2px dotted #4f46e5;
  border-left: 2px solid #4f46e5;
}`,
    margin: `/* Margin Example */
.box {
  margin: 20px;
  /* Alohida tomonlar uchun */
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
}`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-8">
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes width {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 50%;
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }

        .animate-width {
          animation: width 1.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 2s;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Animated Header Section */}
        <div className="text-center mb-8 sm:mb-16 relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-indigo-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          {/* Main Title */}
          <h1 className="relative">
            <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
              CSS Box Model
            </span>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-bounce delay-300"></div>
          </h1>

          {/* Subtitle with animated underline */}
          <div className="relative mt-4 sm:mt-6 inline-block">
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-4">
              HTML elementlarining joylashuvi va o'lchamlarini boshqaruvchi asosiy tushuncha
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-width"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-8 left-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-float opacity-70"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-delay opacity-70"></div>
          <div className="absolute bottom-0 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float-delay-2 opacity-70"></div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 mb-6 sm:mb-8">
          {['visualizer', 'examples', 'practice'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
          {activeTab === 'visualizer' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Interactive Box Model */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Interactive Box Model</h2>
                <div className="relative p-8 sm:p-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                  <div className="relative">
                    {/* Margin Layer */}
                    <div className="absolute inset-0 -m-8 border-2 border-dashed border-indigo-200 rounded-xl">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-100 px-3 py-1 text-sm text-indigo-600 rounded-full">
                        Margin
                      </span>
                    </div>
                    
                    {/* Border Layer */}
                    <div className="border-4 border-indigo-400 rounded-lg">
                      <span className="absolute -left-6 top-1/2 -translate-y-1/2 bg-indigo-100 px-3 py-1 text-sm text-indigo-600 rounded-full">
                        Border
                      </span>
                      
                      {/* Padding Layer */}
                      <div className="bg-indigo-100 p-8">
                        <span className="absolute -right-6 top-1/2 -translate-y-1/2 bg-indigo-100 px-3 py-1 text-sm text-indigo-600 rounded-full">
                          Padding
                        </span>
                        
                        {/* Content */}
                        <div className="bg-indigo-600 text-white p-4 rounded text-center">
                          Content
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Model Description */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Box Model Tushunchasi</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Content',
                      desc: 'Elementning asosiy mazmuni (matn, rasm va h.k)',
                      color: 'indigo'
                    },
                    {
                      title: 'Padding',
                      desc: 'Content va Border orasidagi masofa',
                      color: 'purple'
                    },
                    {
                      title: 'Border',
                      desc: 'Elementning chegarasi',
                      color: 'pink'
                    },
                    {
                      title: 'Margin',
                      desc: 'Tashqi elementlar bilan orasidagi masofa',
                      color: 'rose'
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`p-4 rounded-lg bg-${item.color}-50 border border-${item.color}-200`}
                    >
                      <h3 className={`font-semibold text-${item.color}-700 mb-1`}>
                        {item.title}
                      </h3>
                      <p className={`text-${item.color}-600 text-sm`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Box Model Namunalari</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(boxModelExamples).map(([key, code]) => (
                  <div key={key} className="space-y-2">
                    <h3 className="font-semibold text-gray-700 capitalize">{key}</h3>
                    <Editor
                      height="200px"
                      defaultLanguage="css"
                      value={code}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        readOnly: true
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'practice' && (
            <div className="space-y-8 sm:space-y-12">
              {/* 1-Topshiriq */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">1-Topshiriq</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Quyidagi talablarga mos box yarating:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-sm sm:text-base text-gray-600">
                  <li>Content: 200x100px</li>
                  <li>Padding: 20px</li>
                  <li>Border: 2px solid indigo</li>
                  <li>Margin: 10px</li>
                </ul>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Editor
                    height="200px"
                    defaultLanguage="css"
                    value={userCode1}
                    onChange={setUserCode1}
                    theme="vs-dark"
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14
                    }}
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <div style={{ cssText: userCode1.replace('.box', '#preview-box-1') }} id="preview-box-1">
                      Preview
                    </div>
                  </div>
                </div>
              </div>

              {/* 2-Topshiriq */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">2-Topshiriq</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Responsive box yarating:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-sm sm:text-base text-gray-600">
                  <li>Content: 50% width, min-height: 100px</li>
                  <li>Padding: 5% all sides</li>
                  <li>Border: gradient border</li>
                  <li>Margin: auto horizontal</li>
                  <li>Box-shadow qo'shing</li>
                </ul>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Editor
                    height="200px"
                    defaultLanguage="css"
                    value={userCode2}
                    onChange={setUserCode2}
                    theme="vs-dark"
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14
                    }}
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <div style={{ cssText: userCode2.replace('.advanced-box', '#preview-box-2') }} id="preview-box-2">
                      Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CssBoxModel;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFont, FaTextHeight, FaPalette, FaMagic } from "react-icons/fa";

function CssTypography() {
  const [activeSection, setActiveSection] = useState(null);

  const typographyData = [
    {
      id: 1,
      title: "Asosiy Typography 🎨",
      icon: <FaFont className="text-2xl text-purple-500" />,
      description: "Asosiy typography xususiyatlari va ularning qo'llanilishi",
      examples: [
        {
          name: "Modern Sans-serif",
          text: "Zamonaviy Typography",
          className: "font-sans text-2xl hover:tracking-widest transition-all duration-500",
          code: `/* Modern Sans-serif */
.modern-text {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}
.modern-text:hover {
  letter-spacing: 0.2em;
  color: #4f46e5;
}`
        },
        {
          name: "Klassik Serif",
          text: "Klassik Uslub",
          className: "font-serif text-2xl italic hover:not-italic transition-all duration-500",
          code: `/* Classic Serif */
.classic-text {
  font-family: 'Georgia', Times, serif;
  font-style: italic;
  color: #1e293b;
  transition: all 0.3s ease;
}
.classic-text:hover {
  font-style: normal;
  color: #334155;
}`
        },
        {
          name: "Monospace Kod",
          text: "Dasturlash Shrifti",
          className: "font-mono text-2xl hover:scale-105 transition-all duration-500 bg-gray-100 p-2 rounded",
          code: `/* Code Font */
.code-text {
  font-family: 'Fira Code', monospace;
  background: #f8fafc;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}
.code-text:hover {
  transform: scale(1.05);
  background: #f1f5f9;
}`
        }
      ]
    },
    {
      id: 2,
      title: "O'lcham va Qalinlik 📏",
      icon: <FaTextHeight className="text-2xl text-blue-500" />,
      description: "Matn o'lchamlari va qalinlik darajalari",
      examples: [
        {
          name: "Responsive Matn",
          text: "Moslashuvchan O'lcham",
          className: "text-base md:text-lg lg:text-xl hover:scale-105 transition-all duration-500",
          code: `/* Responsive Text */
.responsive-text {
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.5;
  transition: all 0.3s ease;
}
@media (min-width: 768px) {
  .responsive-text {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
  }
}`
        },
        {
          name: "Qalinlik O'zgarishi",
          text: "Qalinlik Effekti",
          className: "text-xl font-light hover:font-bold transition-all duration-500",
          code: `/* Weight Transition */
.weight-text {
  font-weight: 300;
  transition: all 0.3s ease;
}
.weight-text:hover {
  font-weight: 700;
}`
        }
      ]
    },
    {
      id: 3,
      title: "Kreativ Effektlar ✨",
      icon: <FaPalette className="text-2xl text-green-500" />,
      description: "Maxsus matn effektlari va animatsiyalar",
      examples: [
        {
          name: "Gradient Matn",
          text: "Rang O'zgaruvchi",
          className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text hover:from-blue-600 hover:to-purple-600 transition-all duration-1000",
          code: `/* Gradient Text */
.gradient-text {
  background: linear-gradient(to right, #9333ea, #ec4899);
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.5s ease;
}
.gradient-text:hover {
  background: linear-gradient(to right, #2563eb, #9333ea);
}`
        },
        {
          name: "Neon Effekt",
          text: "Neon Yonish",
          className: "text-2xl font-bold text-green-500 hover:text-green-400 [text-shadow:0_0_10px_#22c55e] transition-all duration-500",
          code: `/* Neon Effect */
.neon-text {
  color: #22c55e;
  text-shadow: 0 0 10px currentColor;
  transition: all 0.3s ease;
}
.neon-text:hover {
  color: #4ade80;
  text-shadow: 0 0 20px currentColor;
}`
        },
        {
          name: "3D Matn",
          text: "Hajmli Matn",
          className: "text-2xl font-black text-blue-600 [text-shadow:2px_2px_0_#fff,4px_4px_0_#000] hover:scale-105 transition-all duration-500",
          code: `/* 3D Text */
.text-3d {
  color: #2563eb;
  text-shadow: 
    2px 2px 0 #ffffff,
    4px 4px 0 #000000;
  transition: all 0.3s ease;
}
.text-3d:hover {
  transform: scale(1.05);
}`
        }
      ]
    },
    {
      id: 4,
      title: "Animatsiyalar 🎭",
      icon: <FaMagic className="text-2xl text-yellow-500" />,
      description: "Harakatlanuvchi matn effektlari",
      examples: [
        {
          name: "Yozuv Effekti",
          text: "Typing Animation",
          className: "text-xl font-mono border-r-4 border-black animate-typing overflow-hidden whitespace-nowrap",
          code: `/* Typing Animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
.typing-text {
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid black;
  animation: typing 3s steps(40, end);
}`
        },
        {
          name: "Suzuvchi Matn",
          text: "Floating Effect",
          className: "text-xl inline-block animate-bounce hover:animate-none transition-all duration-500",
          code: `/* Floating Animation */
@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.floating-text {
  animation: floating 2s ease-in-out infinite;
}`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          Typography Gallery
        </h1>
        <p className="text-xl text-gray-600">
          CSS Typography xususiyatlarining interaktiv namunalari
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {typographyData.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h2 className="text-2xl font-bold text-gray-800">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">{section.description}</p>
            
            <div className="space-y-6">
              {section.examples.map((example, index) => (
                <div key={index} className="space-y-2">
                  <p 
                    className={example.className + " cursor-pointer"}
                    onClick={() => setActiveSection(
                      activeSection === `${section.id}-${index}` 
                        ? null 
                        : `${section.id}-${index}`
                    )}
                  >
                    {example.text}
                  </p>
                  
                  {activeSection === `${section.id}-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-800 rounded-lg p-4"
                    >
                      <pre className="text-sm text-white overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Demo */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-12 bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Interactive Demo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.p
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold text-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer"
          >
            Scale Effect
          </motion.p>
          <motion.p
            whileHover={{ rotate: 5 }}
            className="text-xl font-bold text-center p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg cursor-pointer"
          >
            Rotate Effect
          </motion.p>
          <motion.p
            whileHover={{ y: -10 }}
            className="text-xl font-bold text-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg cursor-pointer"
          >
            Float Effect
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default CssTypography;
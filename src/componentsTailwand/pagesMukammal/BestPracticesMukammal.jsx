import React, { useState } from "react"
import dataBestPractices from "../dataMukammal/dataBestPractices"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { FaCode, FaLightbulb } from "react-icons/fa"

function BestPracticesMukammal() {
  const [activeTabId, setActiveTabId] = useState({})

  const handleTabChange = (id, tabNumber) => {
    setActiveTabId(prev => ({
      ...prev,
      [id]: tabNumber
    }))
  }

  const renderContent = (item) => {
    if (activeTabId[item.id] === 2) {
      return (
        <div className="rounded-lg overflow-hidden">
          <SyntaxHighlighter
            language="html"
            style={docco}
            showLineNumbers={true}
            wrapLines={true}
            customStyle={{
              borderRadius: "0.5rem",
              padding: "1rem",
              backgroundColor: "#f8f9fa"
            }}
          >
            {item.codeExample}
          </SyntaxHighlighter>
        </div>
      )
    }

    // Responsive Dizayn uchun render (id: 6)
    if (item.id === 6) {
      return (
        <div className="space-y-6">
          <div className="relative h-64 overflow-hidden rounded-xl">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-purple-200 p-4 rounded">
              <h3 className="text-lg md:text-xl font-bold">Element 1</h3>
              <p className="mt-2">Responsive Grid Element</p>
            </div>
            <div className="bg-purple-300 p-4 rounded">
              <h3 className="text-lg md:text-xl font-bold">Element 2</h3>
              <p className="mt-2">Responsive Grid Element</p>
            </div>
            <div className="bg-purple-400 p-4 rounded">
              <h3 className="text-lg md:text-xl font-bold">Element 3</h3>
              <p className="mt-2">Responsive Grid Element</p>
            </div>
          </div>
        </div>
      )
    }

    // Dark Mode uchun render (id: 7)
    if (item.id === 7) {
      return (
        <div className="space-y-6">
          <div className="relative h-64 overflow-hidden rounded-xl">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-gray-900 dark:text-white text-2xl font-bold">
              Dark Mode Sarlavha
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Dark mode matni namunasi
            </p>
            <button className="mt-4 bg-blue-500 dark:bg-blue-700 
              text-white px-4 py-2 rounded hover:bg-blue-600 
              dark:hover:bg-blue-800 transition-colors">
              Dark Mode Tugma
            </button>
          </div>
        </div>
      )
    }

    // Performance Optimizatsiya uchun render (id: 8)
    if (item.id === 8) {
      return (
        <div className="space-y-6">
          <div className="relative h-64 overflow-hidden rounded-xl">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="bg-[#123456] hover:bg-[#654321] 
              text-[14px] p-[10px] w-[200px] text-white rounded
              transition-colors duration-300">
              Custom JIT Value
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 
              p-4 rounded-lg text-white">
              <h3 className="font-bold mb-2">Performance Tips</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>JIT mode ishlatish</li>
                <li>Purge CSS qo'llash</li>
                <li>Kerakli classlarni import qilish</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    // Default render for other items (1-5)
    return (
      <div className="space-y-6">
        <div className="relative h-64 overflow-hidden rounded-xl">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          {item.id === 1 && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Salom Dunyo</h1>
                <p className="text-gray-600">
                  Tailwind CSS utility-first framework
                </p>
              </div>
              <div className="sm:text-base md:text-lg lg:text-xl bg-gray-100 p-4 rounded">
                Responsive matn
              </div>
            </div>
          )}

          {item.id === 2 && (
            <div className="space-y-8">
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded">
                <div className="flex-shrink-0 bg-blue-200 p-2 rounded">Element 1</div>
                <div className="flex-grow bg-blue-300 p-2 rounded text-center">Element 2</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-200 p-4 rounded">Grid 1</div>
                <div className="bg-blue-300 p-4 rounded">Grid 2</div>
                <div className="bg-blue-400 p-4 rounded">Grid 3</div>
              </div>
            </div>
          )}

          {item.id === 3 && (
            <div className="space-y-8">
              <button className="bg-blue-500 hover:bg-blue-700 
                text-white font-bold py-2 px-4 rounded
                transition duration-300 ease-in-out">
                Tugma
              </button>
              <div className="space-y-4">
                <div className="animate-pulse bg-blue-500 h-4 w-32"></div>
                <div className="animate-bounce text-3xl text-center">↓</div>
              </div>
            </div>
          )}

          {item.id === 4 && (
            <div className="space-y-6">
              <div className="bg-blue-500 text-white p-4 rounded">
                Custom ranglar namunasi
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <pre className="text-sm">
                  {`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { 500: '#FF5733' },
        'custom-gray': '#2C3E50',
      }
    }
  }
}`}
                </pre>
              </div>
            </div>
          )}

          {item.id === 5 && (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img 
                className="w-full h-48 object-cover" 
                src={item.image}
                alt="Karta rasmi"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Karta sarlavhasi</div>
                <p className="text-gray-700 text-base">
                  Karta matni va tafsilotlar
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full 
                  px-3 py-1 text-sm font-semibold text-gray-700 
                  mr-2 mb-2">
                  #tailwindcss
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <div className="flex items-center gap-2">
            <FaLightbulb className="text-blue-500" />
            <p className="text-blue-700 font-medium">
              Muhim eslatma
            </p>
          </div>
          <p className="mt-2 text-blue-600">
            {item.description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <FaCode className="text-4xl text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Tailwind CSS Best Practices
          </h1>
        </div>

        <div className="grid gap-8">
          {dataBestPractices.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="bg-white text-indigo-600 px-2 py-1 rounded">
                    #{item.id}
                  </span>
                  {item.title}
                </h2>
                <p className="mt-1 text-indigo-100 text-sm">
                  {item.description}
                </p>
              </div>

              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => handleTabChange(item.id, 1)}
                    className={`px-6 py-3 font-medium transition-colors ${
                      activeTabId[item.id] === 1
                        ? "bg-indigo-50 border-b-2 border-indigo-500 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Natija
                  </button>
                  <button
                    onClick={() => handleTabChange(item.id, 2)}
                    className={`px-6 py-3 font-medium transition-colors ${
                      activeTabId[item.id] === 2
                        ? "bg-indigo-50 border-b-2 border-indigo-500 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Kod
                  </button>
                </div>
              </div>

              <div className="p-6">
                {renderContent(item)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestPracticesMukammal
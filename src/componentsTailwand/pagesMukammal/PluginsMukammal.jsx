import React, { useState } from "react"
import dataPlugins from "../dataMukammal/dataPlugins"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { FaPlug } from "react-icons/fa"

function PluginsMukammal() {
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
            language="jsx"
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

    // Container Plugin uchun maxsus render (id: 1)
    if (item.id === 1) {
      return (
        <div className="@container">
          <div className="@lg:grid grid-cols-2 gap-4 p-4">
            <div className="bg-blue-100 p-4 rounded-lg mb-4 @lg:mb-0">
              <h3 className="font-bold">Container 1</h3>
              <p>Container query namunasi</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold">Container 2</h3>
              <p>Responsive dizayn</p>
            </div>
          </div>
        </div>
      )
    }

    // Forms Plugin uchun maxsus render (id: 2)
    if (item.id === 2) {
      return (
        <div className="space-y-4 p-4">
          <input 
            type="text" 
            className="form-input px-4 py-2 rounded-lg w-full"
            placeholder="Matn kiriting"
          />
          <select className="form-select px-4 py-2 rounded-lg w-full">
            <option>Tanlov 1</option>
            <option>Tanlov 2</option>
            <option>Tanlov 3</option>
          </select>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <label>Checkbox namunasi</label>
          </div>
        </div>
      )
    }

    // Typography Plugin uchun maxsus render (id: 3)
    if (item.id === 3) {
      return (
        <article className="prose lg:prose-xl max-w-none">
          <h1>Typography Plugin Namunasi</h1>
          <p>
            Bu Typography plugin yordamida formatlangan matn. 
            Prose klassi orqali barcha HTML elementlar chiroyli ko'rinishga ega bo'ladi.
          </p>
          <blockquote>
            Bu blockquote elementi. Typography plugin uni ham chiroyli qiladi.
          </blockquote>
        </article>
      )
    }

    // Boshqa misollar uchun standart render
    return (
      <div className="overflow-x-auto w-full">
        <div 
          dangerouslySetInnerHTML={{ __html: item.codeExample }}
          className="w-full demo-content"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="flex items-center gap-3 mb-8">
          <FaPlug className="text-4xl text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Tailwind CSS Plugins
          </h1>
        </div>

        {/* Plugin misollari */}
        <div className="grid gap-8">
          {dataPlugins.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Misol sarlavhasi */}
              <div className="bg-gray-800 text-white px-6 py-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-blue-400">#{item.id}</span>
                  {item.title}
                </h2>
              </div>

              {/* Tab buttonlar */}
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => handleTabChange(item.id, 1)}
                    className={`px-6 py-3 ${
                      activeTabId[item.id] === 1
                        ? "bg-blue-50 border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Natija
                  </button>
                  <button
                    onClick={() => handleTabChange(item.id, 2)}
                    className={`px-6 py-3 ${
                      activeTabId[item.id] === 2
                        ? "bg-blue-50 border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Kod
                  </button>
                </div>
              </div>

              {/* Kontent */}
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

export default PluginsMukammal  
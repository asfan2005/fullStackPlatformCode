import React, { useState, useEffect } from 'react'
import dataDarkMode from '../dataMukammal/dataDarkMode'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { MdDarkMode } from 'react-icons/md'

function DarkModeMukammal() {
  const [activeTabId, setActiveTabId] = useState({})
  const [systemDarkMode, setSystemDarkMode] = useState(false)

  useEffect(() => {
    // Tizim dark mode ni tekshirish
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemDarkMode(darkModeMediaQuery.matches)

    // Tizim dark mode o'zgarishini kuzatish
    const handler = (e) => setSystemDarkMode(e.matches)
    darkModeMediaQuery.addListener(handler)

    return () => darkModeMediaQuery.removeListener(handler)
  }, [])

  const handleTabChange = (id, tabNumber) => {
    setActiveTabId(prev => ({
      ...prev,
      [id]: tabNumber
    }))
  }

  const toggleDarkMode = (id) => {
    setSystemDarkMode(prev => !prev)
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
              borderRadius: '0.5rem',
              padding: '1rem',
              backgroundColor: '#f8f9fa'
            }}
          >
            {item.codeExample}
          </SyntaxHighlighter>
        </div>
      )
    }

    // ID 4 uchun maxsus render
    if (item.id === 4) {
      return (
        <div className={`space-y-4 p-6 rounded-lg transition-colors duration-200 ${
          systemDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          {/* Header */}
          <h2 className={`text-2xl font-bold ${
            systemDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Media Strategy Example
          </h2>
          
          {/* Content */}
          <div className={`${
            systemDarkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            <p className="mb-4">
              Bu kontent foydalanuvchining tizim sozlamalariga qarab 
              avtomatik ravishda och yoki to'q rejimga o'tadi.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${
                systemDarkMode ? 'bg-blue-400' : 'bg-blue-600'
              }`}></div>
              <span>Tizim Dark Mode: {systemDarkMode ? 'Yoqilgan' : 'O\'chirilgan'}</span>
            </div>
          </div>
          
          {/* Button */}
          <button className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            systemDarkMode 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}>
            Action Button
          </button>

          {/* Izoh */}
          <p className={`text-sm mt-4 ${
            systemDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            * Dark Mode ni yoqish/o'chirish uchun tizim sozlamalarini o'zgartiring
          </p>
        </div>
      )
    }

    // ID 2 uchun maxsus render
    if (item.id === 2) {
      return (
        <div className="space-y-4">
          <button 
            onClick={() => toggleDarkMode(item.id)}
            className={`px-4 py-2 ${
              systemDarkMode 
                ? 'bg-gray-700 text-white' 
                : 'bg-gray-200 text-gray-800'
            } rounded-lg transition-colors duration-200`}
          >
            Toggle Dark Mode
          </button>

          <div className={`p-4 rounded-lg transition-colors duration-200 ${
            systemDarkMode 
              ? 'bg-gray-800 text-white' 
              : 'bg-white text-gray-900'
          }`}>
            <h2 className="text-lg font-semibold">Dark Mode Content</h2>
            <p className="mt-2">Bu content dark mode holatiga qarab o'zgaradi</p>
          </div>
        </div>
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
          <MdDarkMode className="text-4xl text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Dark Mode Misollar
          </h1>
        </div>

        {/* Dark Mode misollari */}
        <div className="grid gap-8">
          {dataDarkMode.map((item) => (
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
                        ? 'bg-blue-50 border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Natija
                  </button>
                  <button
                    onClick={() => handleTabChange(item.id, 2)}
                    className={`px-6 py-3 ${
                      activeTabId[item.id] === 2
                        ? 'bg-blue-50 border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
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

export default DarkModeMukammal
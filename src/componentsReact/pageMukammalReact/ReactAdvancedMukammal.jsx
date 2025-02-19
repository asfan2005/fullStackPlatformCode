import React, { useState } from 'react'
import dataAdvancedMukammal from '../dataMukammalReact/dataAdvancedMukammal'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { toast } from 'react-hot-toast'

function ReactAdvancedMukammal() {
  const [copiedId, setCopiedId] = useState(null)

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    toast.success('Kod nusxalandi!')
    setTimeout(() => setCopiedId(null), 2000)
  }

  const renderResult = (item) => {
    switch (item.id) {
      case 1:
        return (
          <div style={{ padding: 20 }}>
            <h2>Window Size Monitor</h2>
            <p>Width: {window.innerWidth}px</p>
            <p>Height: {window.innerHeight}px</p>
          </div>
        );
      
      case 2:
        return (
          <div style={{ padding: 20 }}>
            <h2>Theme Switcher</h2>
            <button 
              style={{
                backgroundColor: '#ffffff',
                color: '#333333',
                padding: '10px 20px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Current Theme: light
            </button>
          </div>
        );
      
      case 3:
        return (
          <div style={{ padding: 20 }}>
            <h2>Factorial Calculator</h2>
            <p>Factorial of 5 is: 120</p>
            <button>Increment Counter: 0</button>
          </div>
        );
      
      case 4:
        return (
          <div style={{ padding: 20 }}>
            <h2>Posts</h2>
            <div style={{ maxHeight: '400px', overflow: 'auto' }}>
              <div style={{
                border: '1px solid #ccc',
                margin: '10px 0',
                padding: 10
              }}>
                <h3>Example Post Title</h3>
                <p>This is an example post body text...</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return <p>No preview available</p>;
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">React Advanced Tutorials</h1>
      
      <div className="flex flex-col gap-8">
        {dataAdvancedMukammal.map((item) => (
          <div key={item.id} className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="relative">
                  <button
                    onClick={() => handleCopyCode(item.code, item.id)}
                    className="absolute right-2 top-2 px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {copiedId === item.id ? 'Nusxalandi!' : 'Nusxalash'}
                  </button>
                  <SyntaxHighlighter
                    language="jsx"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: '0.375rem',
                      padding: '1rem'
                    }}
                  >
                    {item.code}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-indigo-800 mb-2">Description:</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-green-800 mb-2">Result:</h3>
                  <div className="text-gray-700 leading-relaxed">
                    {renderResult(item)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReactAdvancedMukammal
import React, { useState } from 'react'
import dataAccessibilityMukammal from '../dataMukammalReact/dataAccessibilityMukammal'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { toast } from 'react-hot-toast'

function ReactAccessibilityMukammal() {
  const [copiedId, setCopiedId] = useState(null)

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    toast.success('Kod nusxalandi!')
    setTimeout(() => setCopiedId(null), 2000)
  }

  const renderResult = (result) => {
    try {
      const parsedResult = JSON.parse(result)
      return (
        <div className="space-y-2">
          <div>
            <strong>{parsedResult.feature}:</strong>
          </div>
          <div>
            <ul className="list-disc pl-5 mt-1">
              {parsedResult.benefits ? 
                parsedResult.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                )) :
              parsedResult.attributes ? 
                parsedResult.attributes.map((attribute, index) => (
                  <li key={index}>{attribute}</li>
                )) :
              parsedResult.requirements ? 
                parsedResult.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                )) :
              parsedResult.practices ? 
                parsedResult.practices.map((practice, index) => (
                  <li key={index}>{practice}</li>
                )) :
              parsedResult.guidelines ? 
                parsedResult.guidelines.map((guideline, index) => (
                  <li key={index}>{guideline}</li>
                )) :
              parsedResult.components ? 
                parsedResult.components.map((component, index) => (
                  <li key={index}>{component}</li>
                )) :
              parsedResult.considerations ? 
                parsedResult.considerations.map((consideration, index) => (
                  <li key={index}>{consideration}</li>
                )) :
              parsedResult.techniques.map((technique, index) => (
                <li key={index}>{technique}</li>
              ))
              }
            </ul>
          </div>
        </div>
      )
    } catch (error) {
      return <p>Invalid result format</p>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">React Accessibility</h1>
      
      <div className="flex flex-col gap-8">
        {dataAccessibilityMukammal.map((item) => (
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
                    language="javascript"
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
                  <h3 className="text-lg font-medium text-green-800 mb-2">Features:</h3>
                  <div className="text-gray-700 leading-relaxed">
                    {renderResult(item.result)}
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

export default ReactAccessibilityMukammal
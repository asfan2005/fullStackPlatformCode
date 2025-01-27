import React from 'react'
import dataLayoutJoylashuv from '../dataOrta/dataLayoutJoylashuv'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function LayoutJoylashuv() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Layout va Joylashuv</h1>
      <div className="space-y-6">
        {dataLayoutJoylashuv.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-600 mb-6">{section.desc}</p>

            {section.items.map((item, index) => (
              <div key={index} className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>

                {item.examples && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Misollar:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, i) => (
                        <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.gridExamples && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Grid Misollar:</h4>
                    {item.gridExamples.map((grid, i) => (
                      <div key={i} className="mb-2">
                        <p className="font-medium">{grid.name}:</p>
                        <code className="bg-gray-100 px-2 py-1 rounded">{grid.code}</code>
                      </div>
                    ))}
                  </div>
                )}

                {item.tips && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Maslahatlar:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {item.tips.map((tip, i) => (
                        <li key={i} className="text-gray-700">{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.codeExample && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Kod Misoli:</h4>
                    <SyntaxHighlighter 
                      language="html" 
                      style={docco}
                      className="rounded-lg"
                    >
                      {item.codeExample}
                    </SyntaxHighlighter>
                  </div>
                )}

                {item.breakpoints && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Breakpoint'lar:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {Object.entries(item.breakpoints).map(([key, value]) => (
                        <div key={key} className="bg-gray-100 p-3 rounded">
                          <span className="font-medium">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LayoutJoylashuv
import React from 'react';
import dataAmaliyMashqlarBosh from '../dataBoshlangichReact/dataAmaliyMashqlarBosh';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReactAmaliyMashqlarBosh() {
  const renderCodeBlock = (code, language = 'javascript') => (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers={true}
        customStyle={{
          padding: '1.5rem',
          fontSize: '0.9rem',
          borderRadius: '0.75rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataAmaliyMashqlarBosh.map((project) => (
          <div key={project.id} className="mb-16">
            {/* Project Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-700 mb-6">{project.description}</p>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                Daraja: {project.level}
              </div>
            </div>

            {/* Introduction Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">{project.mainTopics.introduction.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.mainTopics.introduction.points.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Examples Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8">{project.mainTopics.codeExamples.title}</h2>
              
              {/* Components */}
              <div className="space-y-8">
                {project.mainTopics.codeExamples.components.map((component, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">{component.name}</h3>
                    <p className="text-gray-600">{component.description}</p>
                    {renderCodeBlock(component.code)}
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Asosiy Xususiyatlar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.mainTopics.codeExamples.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactAmaliyMashqlarBosh;
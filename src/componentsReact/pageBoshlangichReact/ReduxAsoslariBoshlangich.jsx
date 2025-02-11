import React from 'react';
import dataReduxAsoslari from '../dataBoshlangichReact/dataRudexAsoslari';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReduxAsoslariBoshlangich() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataReduxAsoslari.map((data) => (
          <div key={data.id} className="space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center space-x-4">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600 md:text-6xl">
                  {data.title}
                </h1>
                <span className="px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  {data.level}
                </span>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {data.description}
              </p>
              <div className="relative">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full rounded-2xl shadow-2xl object-cover max-h-[400px] hover:shadow-3xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Introduction Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {data.mainTopics.introduction.title}
              </h2>
              <ul className="space-y-4">
                {data.mainTopics.introduction.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 bg-purple-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Concepts Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.coreConcepts.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.coreConcepts.concepts.map((concept, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{concept.name}</h3>
                      <p className="text-gray-700 mb-6">{concept.description}</p>
                      <div className="bg-gray-900 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          language="jsx"
                          style={tomorrow}
                          showLineNumbers={true}
                          customStyle={{
                            padding: '1.5rem',
                            fontSize: '0.9rem',
                            borderRadius: '0.75rem'
                          }}
                        >
                          {concept.example}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redux Toolkit Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.reduxToolkit.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.reduxToolkit.features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.name}</h3>
                      <p className="text-gray-700 mb-6">{feature.description}</p>
                      <div className="bg-gray-900 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          language="jsx"
                          style={tomorrow}
                          showLineNumbers={true}
                          customStyle={{
                            padding: '1.5rem',
                            fontSize: '0.9rem',
                            borderRadius: '0.75rem'
                          }}
                        >
                          {feature.example}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Usage Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.practicalUsage.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.practicalUsage.examples.map((example, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{example.name}</h3>
                      <div className="bg-gray-900 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          language="jsx"
                          style={tomorrow}
                          showLineNumbers={true}
                          customStyle={{
                            padding: '1.5rem',
                            fontSize: '0.9rem',
                            borderRadius: '0.75rem'
                          }}
                        >
                          {example.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Practices Section */}
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                {data.mainTopics.bestPractices.title}
              </h2>

              {/* Best Practices List */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.mainTopics.bestPractices.practices.map((practice, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 bg-purple-50 p-4 rounded-xl"
                    >
                      <span className="flex-shrink-0 bg-purple-100 rounded-full p-1">
                        <svg 
                          className="w-5 h-5 text-purple-600" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M13 10V3L4 14h7v7l9-11h-7z" 
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-medium">
                        {practice}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Practices Examples */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  Amaliy Namunalar
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  {data.mainTopics.bestPractices.examples.map((example, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="flex-shrink-0 bg-red-100 rounded-full p-2">
                            <svg 
                              className="w-6 h-6 text-red-600" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                              />
                            </svg>
                          </span>
                          <h4 className="text-2xl font-bold text-gray-800">
                            {example.name}
                          </h4>
                        </div>
                        <p className="text-gray-700 mb-6">
                          {example.description}
                        </p>
                        <div className="bg-gray-900 rounded-xl overflow-hidden">
                          <SyntaxHighlighter
                            language="jsx"
                            style={tomorrow}
                            showLineNumbers={true}
                            customStyle={{
                              padding: '1.5rem',
                              fontSize: '0.9rem',
                              borderRadius: '0.75rem',
                              background: '#1a1a1a'
                            }}
                          >
                            {example.code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
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

export default ReduxAsoslariBoshlangich;
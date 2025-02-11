import React from 'react';
import dataFormsValidatsiya from '../dataBoshlangichReact/dataFormsValidatsiya';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function FormsValidatsiya() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataFormsValidatsiya.map((data) => (
          <div key={data.id} className="space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 md:text-6xl">
                {data.title}
              </h1>
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
                    <span className="flex-shrink-0 bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Types Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.formTypes.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.formTypes.types.map((type, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{type.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{type.description}</p>
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
                          {type.example}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Validation Methods Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.validationMethods.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.validationMethods.methods.map((method, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{method.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{method.description}</p>
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
                          {method.example}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Libraries Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.popularLibraries.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.popularLibraries.libraries.map((library, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{library.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{library.description}</p>
                      <div className="bg-gray-100 rounded-lg p-4 mb-4">
                        <code className="text-sm text-gray-800">{library.installation}</code>
                      </div>
                      <ul className="mb-6 space-y-2">
                        {library.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-700">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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
                          {library.example}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Examples Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.practicalExamples.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.practicalExamples.examples.map((example, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">{example.name}</h3>
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
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.bestPractices.title}</h2>
              <ul className="space-y-4">
                {data.bestPractices.practices.map((practice, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-lg">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormsValidatsiya;
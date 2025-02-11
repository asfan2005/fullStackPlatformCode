import React from 'react';
import dataReactRouter from '../dataBoshlangichReact/dataReactRouter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReactRouterBoshlangich() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataReactRouter.map((data) => (
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

            {/* Router Types Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.routerTypes.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.routerTypes.types.map((type, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
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

            {/* Basic Components Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.basicComponents.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.basicComponents.components.map((component, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{component.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{component.description}</p>
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
                          {component.example}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.advancedFeatures.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.advancedFeatures.features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{feature.name}</h3>
                      </div>
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

            {/* Hooks Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.hooks.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.hooks.routerHooks.map((hook, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{hook.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{hook.description}</p>
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
                          {hook.example}
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

export default ReactRouterBoshlangich;
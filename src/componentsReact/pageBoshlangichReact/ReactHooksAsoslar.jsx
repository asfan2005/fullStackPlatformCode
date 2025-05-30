import React from 'react';
import dataHooksAsoslar from '../dataBoshlangichReact/dataHooksAsoslar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReactHooksAsoslar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataHooksAsoslar.map((data) => (
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

            {/* Basic Hooks Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.basicHooks.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.basicHooks.examples.map((example) => (
                  <div key={example.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {example.name}
                      </h3>
                      <p className="text-gray-700 mb-6">{example.description}</p>
                      <div className="bg-gray-900 rounded-xl overflow-hidden">
                        <SyntaxHighlighter
                          language="jsx"
                          style={tomorrow}
                          showLineNumbers={true}
                          customStyle={{ padding: '1.5rem' }}
                        >
                          {example.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Hooks Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.advancedHooks.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.advancedHooks.examples.map((example) => (
                  <div key={example.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {example.name}
                      </h3>
                      <p className="text-gray-700 mb-6">{example.description}</p>
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

            {/* Custom Hooks Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.customHooks.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.customHooks.examples.map((example) => (
                  <div key={example.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {example.name}
                      </h3>
                      <p className="text-gray-700 mb-6">{example.description}</p>
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

            {/* Additional Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Qo'shimcha Ma'lumotlar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Hooks Qoidalari
                  </h3>
                  <ul className="space-y-3 text-blue-700">
                    <li>• Faqat React funksiya komponentlarida ishlating</li>
                    <li>• Faqat eng yuqori darajada ishlating</li>
                    <li>• Shartli operatorlar ichida ishlatmang</li>
                  </ul>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">
                    Foydali Manbalar
                  </h3>
                  <ul className="space-y-3 text-purple-700">
                    <li>• React rasmiy hujjatlari</li>
                    <li>• React Hooks video darslari</li>
                    <li>• GitHub repositories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactHooksAsoslar;
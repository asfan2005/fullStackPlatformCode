import React, { useMemo, memo } from 'react';
import dataAdvancedHooksOrta from '../dataOrtaReact/dataAdvancedHooksOrta';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Optimizatsiya uchun kichik komponentlarni ajratamiz
const CodeBlock = memo(({ code, language = 'javascript' }) => (
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
));

const FeatureItem = memo(({ children }) => (
  <li className="flex items-start space-x-4">
    <span className="flex-shrink-0 bg-blue-100 rounded-full p-1">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
    <span className="text-gray-700 text-lg">{children}</span>
  </li>
));

function ReactAdvancedHooksOrta() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataAdvancedHooksOrta.map((section) => (
          <div key={section.id} className="mb-20">
            {/* Header Section */}
            <div className="text-center space-y-8 mb-12">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 md:text-6xl">
                {section.title}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {section.description}
              </p>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                {section.level}
              </div>
              {section.image && (
                <div className="relative group">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full rounded-2xl shadow-2xl object-cover max-h-[400px] group-hover:shadow-3xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl group-hover:from-black/40 transition-all duration-300" />
                </div>
              )}
            </div>

            {/* Introduction Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.introduction.title}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.mainTopics.introduction.points.map((point, index) => (
                  <FeatureItem key={index}>{point}</FeatureItem>
                ))}
              </ul>
            </div>

            {/* Code Examples Section */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                {section.mainTopics.codeExamples.title}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {section.mainTopics.codeExamples.components.map((component, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {component.name}
                      </h3>
                      <p className="text-gray-700 mb-6">
                        {component.description}
                      </p>
                      <CodeBlock code={component.code} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Asosiy Xususiyatlar
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.mainTopics.codeExamples.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ReactAdvancedHooksOrta);
import React, { memo } from 'react';
import dataComponentLifecycle from '../dataOrtaReact/dataComponentLifecycle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Optimizatsiya uchun kichik komponentlar
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

function ReactComponentLifecycle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataComponentLifecycle.map((section) => (
          <div key={section.id} className="mb-20">
            {/* Header Section */}
            <div className="text-center space-y-8 mb-12">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 md:text-6xl">
                {section.title}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {section.description}
              </p>
              {section.image && (
                <div className="flex justify-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-auto max-h-96 w-auto object-contain rounded-xl shadow-lg"
                  />
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
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
              {section.mainTopics.codeExamples.features.map((feature, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <FeatureItem key={idx}>{detail}</FeatureItem>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-600 italic">{feature.importance}</p>
                </div>
              ))}
            </div>

            {/* Best Practices Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.codeExamples.bestPractices.title}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {section.mainTopics.codeExamples.bestPractices.practices.map((practice, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">{practice.name}</h3>
                    <p className="text-gray-700">{practice.description}</p>
                    <ul className="space-y-2">
                      {practice.tips.map((tip, idx) => (
                        <FeatureItem key={idx}>{tip}</FeatureItem>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Resources Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.additionalResources.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.mainTopics.additionalResources.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ReactComponentLifecycle);
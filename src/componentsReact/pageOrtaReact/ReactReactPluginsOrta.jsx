import React, { memo } from 'react';
import dataReactPluginsOrta from '../dataOrtaReact/dataReactPluginsOrta';
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

const ContentCard = memo(({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
));

function ReactReactPluginsOrta() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataReactPluginsOrta.map((section) => (
          <div key={section.id} className="mb-20">
            {/* Header Section */}
            <div className="text-center space-y-8 mb-12">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
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
            <ContentCard className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.introduction.title}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.mainTopics.introduction.points.map((point, index) => (
                  <FeatureItem key={index}>{point}</FeatureItem>
                ))}
              </ul>
              {section.mainTopics.introduction.examples.map((example, index) => (
                <div key={index} className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {example.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{example.description}</p>
                  <CodeBlock code={example.code} />
                </div>
              ))}
            </ContentCard>

            {/* Popular Plugins Section */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.popularPlugins.title}
              </h2>
              {section.mainTopics.popularPlugins.categories.map((category, index) => (
                <ContentCard key={index}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {category.name}
                  </h3>
                  {category.plugins.map((plugin, idx) => (
                    <div key={idx} className="mb-8 last:mb-0">
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        {plugin.name}
                      </h4>
                      <p className="text-gray-700 mb-4">{plugin.description}</p>
                      <CodeBlock code={plugin.code} />
                    </div>
                  ))}
                </ContentCard>
              ))}
            </div>

            {/* UI Components Section */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.uiComponents.title}
              </h2>
              {section.mainTopics.uiComponents.libraries.map((library, index) => (
                <ContentCard key={index}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {library.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{library.description}</p>
                  <CodeBlock code={library.code} />
                </ContentCard>
              ))}
            </div>

            {/* Utility Plugins Section */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.utilityPlugins.title}
              </h2>
              {section.mainTopics.utilityPlugins.plugins.map((plugin, index) => (
                <ContentCard key={index}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {plugin.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{plugin.description}</p>
                  <CodeBlock code={plugin.code} />
                </ContentCard>
              ))}
            </div>

            {/* Best Practices Section */}
            <ContentCard className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.bestPractices.title}
              </h2>
              {section.mainTopics.bestPractices.practices.map((practice, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {practice.name}
                  </h3>
                  <ul className="space-y-3">
                    {practice.tips.map((tip, idx) => (
                      <FeatureItem key={idx}>{tip}</FeatureItem>
                    ))}
                  </ul>
                </div>
              ))}
            </ContentCard>

            {/* Additional Resources Section */}
            <ContentCard className="bg-gradient-to-r from-purple-50 to-pink-50">
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
                    className="group flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </ContentCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ReactReactPluginsOrta);
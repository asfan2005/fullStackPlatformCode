import React, { memo } from 'react';
import dataErrorBoundaries from '../dataOrtaReact/dataErrorBoundaries';
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

const SectionHeader = memo(({ title, description, image }) => (
  <div className="text-center space-y-8 mb-12">
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 md:text-6xl">
      {title}
    </h1>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
      {description}
    </p>
    {image && (
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-auto max-h-96 w-auto object-contain rounded-xl shadow-lg"
          loading="lazy"
        />
      </div>
    )}
  </div>
));

const ContentCard = memo(({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
));

const CodeExampleCard = memo(({ component }) => (
  <ContentCard>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      {component.name}
    </h3>
    <p className="text-gray-700 mb-6">
      {component.description}
    </p>
    <CodeBlock code={component.code} />
  </ContentCard>
));

function ReactErrorBoundaries() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataErrorBoundaries.map((section) => (
          <div key={section.id} className="mb-20">
            <SectionHeader 
              title={section.title}
              description={section.description}
              image={section.image}
            />

            <ContentCard className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.introduction.title}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.mainTopics.introduction.points.map((point, index) => (
                  <FeatureItem key={index}>{point}</FeatureItem>
                ))}
              </ul>
            </ContentCard>

            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                {section.mainTopics.codeExamples.title}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {section.mainTopics.codeExamples.components.map((component, index) => (
                  <CodeExampleCard key={index} component={component} />
                ))}
              </div>
            </div>

            <ContentCard className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.codeExamples.features[0].title}
              </h2>
              <p className="text-gray-700 mb-6">
                {section.mainTopics.codeExamples.features[0].description}
              </p>
              <ul className="space-y-4">
                {section.mainTopics.codeExamples.features[0].details.map((detail, index) => (
                  <FeatureItem key={index}>{detail}</FeatureItem>
                ))}
              </ul>
            </ContentCard>

            <ContentCard className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {section.mainTopics.codeExamples.bestPractices.title}
              </h2>
              {section.mainTopics.codeExamples.bestPractices.practices.map((practice, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{practice.name}</h3>
                  <ul className="space-y-3">
                    {practice.tips.map((tip, idx) => (
                      <FeatureItem key={idx}>{tip}</FeatureItem>
                    ))}
                  </ul>
                </div>
              ))}
            </ContentCard>

            <ContentCard>
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
            </ContentCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ReactErrorBoundaries);
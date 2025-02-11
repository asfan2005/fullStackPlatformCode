import React from 'react';
import dataBestPracticeBosh from '../dataBoshlangichReact/dataBestPracticeBosh';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReactBestPracticesBosh() {
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

  const renderSection = (title, children, className = '') => (
    <div className={`space-y-8 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {children}
    </div>
  );

  const renderCard = ({ title, content, code, className = '' }) => (
    <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="p-8">
        {title && <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>}
        {content && <p className="text-gray-700 mb-6">{content}</p>}
        {code && renderCodeBlock(code)}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataBestPracticeBosh.map((data) => (
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

            {/* Core Concepts Section */}
            {renderSection(
              data.mainTopics.coreConcepts.title,
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.coreConcepts.concepts.map((concept, index) => (
                  renderCard({
                    key: index,
                    title: concept.name,
                    content: concept.description,
                    code: concept.example
                  })
                ))}
              </div>
            )}

            {/* Best Practices Section */}
            {renderSection(
              data.mainTopics.bestPractices.title,
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.bestPractices.practices.map((practice, index) => (
                  renderCard({
                    key: index,
                    title: practice.name,
                    content: practice.description,
                    code: practice.code
                  })
                ))}
              </div>
            )}

            {/* Practical Examples Section */}
            {renderSection(
              data.mainTopics.practicalExamples.title,
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.practicalExamples.examples.map((example, index) => (
                  renderCard({
                    key: index,
                    title: example.name,
                    code: example.code
                  })
                ))}
              </div>
            )}

            {/* Code Organization Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {data.mainTopics.codeOrganization.title}
              </h2>
              <ul className="space-y-4 mb-8">
                {data.mainTopics.codeOrganization.principles.map((principle, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-lg">{principle}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-6">
                {data.mainTopics.codeOrganization.examples.map((example, index) => (
                  renderCard({
                    key: index,
                    title: example.name,
                    content: example.description,
                    code: example.code
                  })
                ))}
              </div>
            </div>

            {/* Architecture Patterns Section */}
            {data.mainTopics.architecturePatterns && renderSection(
              data.mainTopics.architecturePatterns.title,
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.architecturePatterns.patterns.map((pattern, index) => (
                  renderCard({
                    key: index,
                    title: pattern.name,
                    content: pattern.description,
                    code: pattern.example || pattern.structure
                  })
                ))}
              </div>
            )}

            {/* Performance Optimization Section */}
            {data.mainTopics.performanceOptimization && renderSection(
              data.mainTopics.performanceOptimization.title,
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.performanceOptimization.techniques.map((technique, index) => (
                  renderCard({
                    key: index,
                    title: technique.name,
                    code: technique.example
                  })
                ))}
              </div>
            )}

            {/* Practical Projects Section */}
            {data.mainTopics.practicalProjects && renderSection(
              data.mainTopics.practicalProjects.title,
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.practicalProjects.projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.name}</h3>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    {renderCodeBlock(project.structure.folders)}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {project.structure.keyFeatures.map((feature, i) => (
                            <li key={i} className="text-gray-700">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3">Technologies</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {project.structure.technologies.map((tech, i) => (
                            <li key={i} className="text-gray-700">{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactBestPracticesBosh;
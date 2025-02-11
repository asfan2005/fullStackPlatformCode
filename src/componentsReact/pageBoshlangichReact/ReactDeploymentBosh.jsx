import React from 'react';
import dataDeploymentBosh from '../dataBoshlangichReact/dataDeploymentBosh';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReactDeploymentBosh() {
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

  const renderTopicSection = (topic, renderFunction) => {
    if (!topic) return null;
    return renderSection(
      topic.title,
      <div className="grid grid-cols-1 gap-8">
        {Array.isArray(topic[Object.keys(topic)[1]]) && 
          topic[Object.keys(topic)[1]].map((item, index) => (
            renderFunction(item, index)
          ))
        }
      </div>
    );
  };

  const renderMainContent = (data) => {
    const sections = {
      buildProcess: (topic) => renderTopicSection(topic, (concept, index) => 
        renderCard({
          key: index,
          title: concept.name,
          content: concept.description,
          code: concept.example
        })
      ),
      deploymentPlatforms: (topic) => renderTopicSection(topic, (platform, index) => 
        renderCard({
          key: index,
          title: platform.name,
          content: platform.description,
          code: platform.steps
        })
      ),
      serverConfiguration: (topic) => renderTopicSection(topic, (config, index) => 
        renderCard({
          key: index,
          title: config.name,
          content: config.description,
          code: config.code
        })
      ),
      cicdPipelines: (topic) => renderTopicSection(topic, (example, index) => 
        renderCard({
          key: index,
          title: example.name,
          content: example.description,
          code: example.code
        })
      ),
      security: (topic) => renderTopicSection(topic, (practice, index) => 
        renderCard({
          key: index,
          title: practice.name,
          content: practice.description,
          code: practice.code
        })
      ),
      monitoring: (topic) => renderTopicSection(topic, (tool, index) => 
        renderCard({
          key: index,
          title: tool.name,
          content: tool.description,
          code: tool.code
        })
      )
    };

    return (
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

        {/* Render all other sections dynamically */}
        {Object.entries(sections).map(([key, renderFunc]) => (
          data.mainTopics[key] && renderFunc(data.mainTopics[key])
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataDeploymentBosh.map(renderMainContent)}
      </div>
    </div>
  );
}

export default ReactDeploymentBosh;
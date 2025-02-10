import React from 'react';
import dataPropsState from '../dataBoshlangichReact/dataPropsState';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReactPropsState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {dataPropsState.map((data) => (
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

            {/* Props Examples Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">Props Misollari</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.propsBasics.examples.map((example) => (
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

            {/* Props Types Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.propsTypes.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.mainTopics.propsTypes.types.map((type) => (
                  <div key={type.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{type.name}</h4>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="bg-gray-900 rounded-lg overflow-hidden mb-4">
                      <SyntaxHighlighter
                        language="jsx"
                        style={tomorrow}
                        customStyle={{ padding: '1rem' }}
                      >
                        {type.example}
                      </SyntaxHighlighter>
                    </div>
                    {type.note && (
                      <p className="text-sm text-gray-500 italic bg-gray-50 p-3 rounded-lg">
                        {type.note}
                      </p>
                    )}
                    <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-mono text-blue-700">{type.propType}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* PropTypes Example */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {data.mainTopics.propsTypes.propTypesExample.name}
                </h3>
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <SyntaxHighlighter
                    language="jsx"
                    style={tomorrow}
                    showLineNumbers={true}
                    customStyle={{ padding: '1.5rem' }}
                  >
                    {data.mainTopics.propsTypes.propTypesExample.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            {/* State Management Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">{data.mainTopics.stateManagement.title}</h2>
              <div className="grid grid-cols-1 gap-8">
                {data.mainTopics.stateManagement.examples.map((example) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactPropsState;
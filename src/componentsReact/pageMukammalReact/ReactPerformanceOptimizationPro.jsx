import React, { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { reactPerformanceOptimizationProData } from '../dataMukammalReact/dataPerformanceOptimizationPro';

// Optimizatsiya uchun kichik komponentlar
const CodeBlock = memo(({ code }) => {
  const [copyStatus, setCopyStatus] = React.useState('Copy');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus('Copied!');
      
      setTimeout(() => {
        setCopyStatus('Copy');
      }, 2000);
      
    } catch (err) {
      setCopyStatus('Failed to copy');
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden relative">
      <button
        onClick={handleCopy}
        className={`absolute top-2 right-2 ${
          copyStatus === 'Copied!' 
            ? 'bg-green-600 hover:bg-green-700' 
            : copyStatus === 'Failed to copy'
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-gray-700 hover:bg-gray-600'
        } text-white px-3 py-1 rounded-md text-sm transition-colors duration-200`}
      >
        {copyStatus}
      </button>
      <SyntaxHighlighter
        language="javascript"
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
});

const ContentCard = memo(({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
));

function ReactPerformanceOptimizationPro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 md:text-6xl mb-8">
            {reactPerformanceOptimizationProData.title}
          </h1>
        </div>

        {/* Tutorials Section */}
        <div className="space-y-16">
          {reactPerformanceOptimizationProData.tutorials.map((tutorial) => (
            <ContentCard key={tutorial.id}>
              {/* Tutorial Header */}
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {tutorial.title}
              </h2>

              {/* Tutorial Content */}
              <div className="space-y-8">
                {tutorial.content.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    
                    {item.text && (
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.text}
                      </p>
                    )}
                    
                    {item.code && (
                      <div className="mt-4">
                        <CodeBlock code={item.code} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ContentCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ReactPerformanceOptimizationPro);   
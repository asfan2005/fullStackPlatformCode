import React, { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { reactStateManagementArchitectureData } from '../dataMukammalReact/dataStateMangementArchitecture';

// Optimizatsiya uchun kichik komponentlar
const CodeBlock = memo(({ code }) => {
  const [copyStatus, setCopyStatus] = React.useState('Copy');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000);
    } catch (err) {
      setCopyStatus('Failed to copy');
      console.error('Failed to copy text: ', err);
    }
  };

  // Remove extra backticks and handle JSX code properly
  const cleanCode = code.replace(/^`|`$/g, '').trim();

  return (
    <div className="relative">
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
        language="jsx"
        style={vscDarkPlus}
        className="rounded-lg text-sm"
        showLineNumbers={true}
        customStyle={{
          padding: '1.5rem',
          fontSize: '0.9rem',
          borderRadius: '0.75rem'
        }}
      >
        {cleanCode}
      </SyntaxHighlighter>
    </div>
  );
});

const ContentCard = memo(({ children, className = "" }) => (
  <div className={`w-full bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
));

function ReactStateManagementArchi() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-7xl w-full">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 md:text-6xl mb-16 text-center">
          {reactStateManagementArchitectureData.title}
        </h1>

        {/* Tutorials Section */}
        <div className="space-y-12 w-full mx-auto">
          {reactStateManagementArchitectureData.tutorials.map((tutorial) => (
            <ContentCard key={tutorial.id}>
              {/* Tutorial Header */}
              <h2 className="text-3xl font-bold text-indigo-600 mb-8 w-full">
                {tutorial.title}
              </h2>

              {/* Tutorial Content */}
              <div className="space-y-8 w-full">
                {tutorial.content.map((item, index) => (
                  <div key={index} className="space-y-4 w-full">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    
                    {item.text && (
                      <p className="text-gray-700 text-lg leading-relaxed w-full">
                        {item.text}
                      </p>
                    )}
                    
                    {item.code && (
                      <div className="mt-4 w-full">
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

export default memo(ReactStateManagementArchi);
import React, { memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { reactPerformanceOptimizationProData } from '../dataMukammalReact/dataPerformanceOptimizationPro';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const CodeBlock = memo(({ code }) => {
  const [copyStatus, setCopyStatus] = React.useState('Copy');
  const [showPreview, setShowPreview] = React.useState(false);

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

  // React-live uchun scope
  const scope = {
    React,
    useState: React.useState,
    useEffect: React.useEffect,
    useCallback: React.useCallback,
    useMemo: React.useMemo,
    useRef: React.useRef,
    memo: React.memo,
    Fragment: React.Fragment,
  };

  // Kodni to'g'ri transformatsiya qilish
  const transformCode = (code) => {
    if (!code) return '';

    let transformedCode = code.trim();

    // Agar kod return bilan boshlanmasa va function/class bo‘lmasa
    if (!transformedCode.startsWith('return') && 
        !transformedCode.includes('function') && 
        !transformedCode.includes('class')) {
      transformedCode = `
        function Demo() {
          return (
            ${transformedCode}
          );
        }
        render(<Demo />);
      `;
    } 
    // Agar function bor-u, lekin `render()` chaqirilmagan bo‘lsa
    else if (transformedCode.includes('function') && !transformedCode.includes('render(')) {
      transformedCode += `\nrender(<Demo />);`;
    }
    
    return transformedCode;
  };

  if (!code) return null;

  return (
    <div className="space-y-4">
      {!showPreview ? (
        <div className="bg-gray-900 rounded-xl overflow-hidden relative">
          <div className="flex gap-2 absolute top-2 right-2">
            <button
              onClick={handleCopy}
              className={`${
                copyStatus === 'Copied!' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : copyStatus === 'Failed to copy'
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gray-700 hover:bg-gray-600'
              } text-white px-3 py-1 rounded-md text-sm transition-colors duration-200`}
            >
              {copyStatus}
            </button>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
            >
              {showPreview ? "Kodni ko'rish" : "Natijani ko'rish"}
            </button>
          </div>
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
            {code}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className="border rounded-xl p-4 bg-white shadow-lg relative">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setShowPreview(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
            >
              Kodni ko'rish
            </button>
          </div>
          <LiveProvider 
            code={code} 
            scope={scope}
            transformCode={transformCode}
            noInline={true}
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Natija
              </h3>
              <div className="p-6 bg-white rounded-lg min-h-[200px] border border-gray-200 shadow-sm">
                <LivePreview />
              </div>
              <div className="mt-4">
                <LiveError />
              </div>
            </div>
          </LiveProvider>
        </div>
      )}
    </div>
  );
});

// Content kartochka komponenti
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

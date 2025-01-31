import React, { useState } from 'react';
import dataRasmlarMedia from '../dataMukammal/dataRasmlarMedia';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

function RasmlarMedia() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 drop-shadow-sm"
        >
          Rasmlar va Media Elementlari
        </motion.h1>
        
        <div className="grid gap-10">
          {dataRasmlarMedia.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Sarlavha va Rasm */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                {/* Kod misoli */}
                <div className="relative mt-4 group">
                  <SyntaxHighlighter 
                    language="jsx"
                    style={tomorrow}
                    className="rounded-xl !bg-gray-900 text-sm"
                    showLineNumbers={true}
                    customStyle={{
                      padding: '1.5rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.codeExample}
                  </SyntaxHighlighter>

                  {/* Nusxa olish tugmasi */}
                  <button
                    onClick={() => handleCopy(item.codeExample, item.id)}
                    className={`absolute top-4 right-4 px-4 py-2 rounded-lg text-sm font-medium 
                      transition-all duration-300 ${
                        copiedId === item.id
                          ? 'bg-green-500 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                  >
                    {copiedId === item.id ? 'Nusxalandi ✓' : 'Nusxa olish'}
                  </button>
                </div>

                {/* Kod natijasi */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Natija:
                  </h3>
                  <div className="p-6 border-2 border-gray-100 rounded-xl bg-gray-50 hover:border-blue-100 transition-colors">
                    <div 
                      className="preview-area"
                      dangerouslySetInnerHTML={{ __html: item.codeExample }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RasmlarMedia;
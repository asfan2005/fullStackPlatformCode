import React, { useState } from 'react';
import dataAmaliy from '../dataOrta/dataAmaliy';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function AmaliyPracePage() {
  const [selectedExample, setSelectedExample] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Amaliy Mashg'ulotlar</h1>
      
      {dataAmaliy.map((mavzu) => (
        <div key={mavzu.id} className="mb-10 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">{mavzu.title}</h2>
          <p className="text-gray-600 mb-6">{mavzu.description}</p>

          {mavzu.examples.map((misol, index) => (
            <div key={index} className="mb-6 bg-gray-50 rounded-lg p-4">
              <h3 className="text-xl font-medium mb-4">{misol.name}</h3>
              
              {/* Kod bloki */}
              <div className="mb-4">
                <SyntaxHighlighter 
                  language="javascript" 
                  style={dracula}
                  className="rounded-lg"
                  showLineNumbers
                >
                  {misol.code}
                </SyntaxHighlighter>
              </div>

              {/* Tushuntirish */}
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium mb-2">Tushuntirish:</h4>
                <p className="text-gray-700">{misol.explanation}</p>
              </div>

              {/* Natija */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Natija:</h4>
                <p className="text-gray-700">{misol.result}</p>
              </div>

              {/* Amaliy mashq tugmasi */}
              <button
                onClick={() => setSelectedExample(misol)}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Amaliy Mashqni Boshlash
              </button>
            </div>
          ))}
        </div>
      ))}

      {/* Modal oyna */}
      {selectedExample && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h3 className="text-2xl font-semibold mb-4">{selectedExample.name}</h3>
            <div className="mb-4">
              <SyntaxHighlighter 
                language="javascript" 
                style={dracula}
                className="rounded-lg"
              >
                {selectedExample.code}
              </SyntaxHighlighter>
            </div>
            <button
              onClick={() => setSelectedExample(null)}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AmaliyPracePage;
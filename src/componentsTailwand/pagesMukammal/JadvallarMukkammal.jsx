import React, { useState } from 'react';
import dataJadvallar from '../dataMukammal/dataJadvallar';
import { FaTable } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function JadvallarMukkammal() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="flex items-center gap-3 mb-8">
          <FaTable className="text-4xl text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Tailwind CSS Jadvallar
          </h1>
        </div>

        {/* Jadvallar ro'yxati */}
        <div className="grid gap-8">
          {dataJadvallar.map((jadval) => (
            <div
              key={jadval.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Jadval sarlavhasi */}
              <div className="bg-gray-800 text-white px-6 py-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-blue-400">#{jadval.id}</span>
                  {jadval.title}
                </h2>
              </div>

              {/* Tab buttonlar */}
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`px-6 py-3 ${
                      activeTab === 1
                        ? 'bg-blue-50 border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Natija
                  </button>
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`px-6 py-3 ${
                      activeTab === 2
                        ? 'bg-blue-50 border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Kod
                  </button>
                </div>
              </div>

              {/* Kontent */}
              <div className="p-6">
                {activeTab === 1 ? (
                  // Jadval natijasi
                  <div className="overflow-x-auto">
                    <div dangerouslySetInnerHTML={{ __html: jadval.codeExample }} />
                  </div>
                ) : (
                  // Kod ko'rinishi
                  <SyntaxHighlighter
                    language="html"
                    style={docco}
                    className="rounded-lg"
                  >
                    {jadval.codeExample}
                  </SyntaxHighlighter>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JadvallarMukkammal;
import React from 'react';
import dataArrayObyektlarPro from "../dataOrta/dataArrayObyektlarPro";
import { motion } from 'framer-motion';

function ArrayObyektlarPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Array va Obyektlar Pro
        </motion.h1>

        <div className="space-y-12">
          {dataArrayObyektlarPro.map((section) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Section Header */}
              <div className="bg-indigo-600 px-6 py-4">
                <h2 className="text-2xl font-semibold text-white">
                  {section.id}. {section.title}
                </h2>
              </div>
              
              {/* Section Content */}
              <div className="p-6">
                <p className="text-gray-600 text-lg mb-8 border-l-4 border-indigo-400 pl-4">
                  {section.description}
                </p>
                
                <div className="space-y-8">
                  {section.examples.map((example, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      {/* Example Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-medium text-gray-800">
                          {example.name}
                        </h3>
                      </div>

                      {/* Code Block */}
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-green-400 overflow-x-auto whitespace-pre-wrap">
                          <code>{example.code}</code>
                        </pre>
                      </div>

                      {/* Explanation */}
                      <div className="mb-4">
                        <p className="text-gray-600 italic">
                          {example.explanation}
                        </p>
                      </div>

                      {/* Result */}
                      {example.result && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                            <h4 className="font-semibold text-green-700">
                              Natija:
                            </h4>
                          </div>
                          <pre className="text-green-800 bg-green-100 p-3 rounded overflow-x-auto">
                            {example.result}
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tips Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
            Foydali Maslahatlar
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-medium text-yellow-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Array bilan ishlash bo'yicha maslahatlar
              </h3>
              <ul className="list-disc list-inside text-yellow-700 space-y-2">
                <li>Har doim array metodlarini zanjirlash imkoniyatini o'ylang</li>
                <li>Katta massivlar bilan ishlashda performance'ni hisobga oling</li>
                <li>Array.prototype metodlarini o'rganib chiqing</li>
                <li>forEach o'rniga map, filter, reduce metodlarini ko'proq ishlating</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Object bilan ishlash bo'yicha maslahatlar
              </h3>
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                <li>Object.freeze() va Object.seal() farqini biling</li>
                <li>Chuqur nusxa olish usullarini o'rganing</li>
                <li>Object.defineProperty() imkoniyatlarini o'rganing</li>
                <li>Object destructuring sintaksisini qo'llang</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ArrayObyektlarPro;
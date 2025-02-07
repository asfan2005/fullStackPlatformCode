import React from 'react';
import dataJsxAsoslarBosh from '../dataBoshlangichReact/dataJsxAsoslarBosh';

function JsxAsoslarBoshlangich() {
  // Ma'lumotlar mavjudligini tekshirish
  if (!dataJsxAsoslarBosh || !Array.isArray(dataJsxAsoslarBosh) || dataJsxAsoslarBosh.length === 0) {
    return <div>Ma'lumotlar yuklanmoqda...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">JSX Asoslari</h1>
      
      {dataJsxAsoslarBosh.map((jsxKurs) => (
        <div key={jsxKurs.id} className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Asosiy Ma'lumot */}
          {jsxKurs.image && (
            <div className="relative">
              <img 
                src={jsxKurs.image} 
                alt={jsxKurs.title} 
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full">
                {jsxKurs.level}
              </span>
            </div>
          )}

          <div className="p-8">
            {/* Sarlavha va Tavsif */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{jsxKurs.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{jsxKurs.description}</p>

            {/* JSX Kirish */}
            {jsxKurs.mainTopics?.introduction && (
              <div className="mb-8 bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {jsxKurs.mainTopics.introduction.title}
                </h3>
                <ul className="space-y-3">
                  {jsxKurs.mainTopics.introduction.points.map((point, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* JSX Qoidalari */}
            {jsxKurs.mainTopics?.jsxRules && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{jsxKurs.mainTopics.jsxRules.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {jsxKurs.mainTopics.jsxRules.rules.map((rule, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <h4 className="text-xl font-semibold text-blue-600 mb-3">{rule.name}</h4>
                      <p className="text-gray-600 mb-4">{rule.description}</p>
                      <div className="bg-gray-800 text-white p-3 rounded-lg mb-3">
                        <code className="text-sm">{rule.example}</code>
                      </div>
                      <p className="text-sm text-gray-500 italic">{rule.additionalInfo}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amaliy Misollar */}
            {jsxKurs.mainTopics?.practicalExamples && (
              <div className="mb-8 bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{jsxKurs.mainTopics.practicalExamples.title}</h3>
                <div className="space-y-6">
                  {jsxKurs.mainTopics.practicalExamples.examples.map((example, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">{example.name}</h4>
                      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ilg'or Konseptlar */}
            {jsxKurs.mainTopics?.advancedConcepts && (
              <div className="mb-8 bg-purple-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{jsxKurs.mainTopics.advancedConcepts.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {jsxKurs.mainTopics.advancedConcepts.concepts.map((concept, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-purple-600 mb-3">{concept.name}</h4>
                      <p className="text-gray-600 mb-4">{concept.description}</p>
                      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        <code>{concept.example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ko'p Uchraydigan Xatolar */}
            {jsxKurs.commonMistakes && (
              <div className="mb-8 bg-red-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{jsxKurs.commonMistakes.title}</h3>
                <div className="space-y-4">
                  {jsxKurs.commonMistakes.mistakes.map((mistake, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold text-red-600 mb-3">{mistake.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-100 p-4 rounded-lg">
                          <p className="text-sm text-red-800 mb-2">Noto'g'ri:</p>
                          <code className="text-red-600">{mistake.wrong}</code>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg">
                          <p className="text-sm text-green-800 mb-2">To'g'ri:</p>
                          <code className="text-green-600">{mistake.correct}</code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default JsxAsoslarBoshlangich;
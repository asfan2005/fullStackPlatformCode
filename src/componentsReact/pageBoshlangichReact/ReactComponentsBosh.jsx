import React from 'react'
import dataReactComponentlar from '../dataBoshlangichReact/dataReactComponentlar'

function ReactComponentsBosh() {
  const data = dataReactComponentlar[0] // Birinchi element

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Asosiy sarlavha sektsiyasi */}
      <div className="text-center mb-12 bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 hover:text-blue-700 transition-colors">
          {data.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {data.description}
        </p>
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-80 object-cover rounded-xl mt-6 shadow-md hover:shadow-xl transition-shadow"
        />
      </div>

      {/* Asosiy kontentlar */}
      <div className="grid gap-10">
        {/* Kirish qismi */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.mainTopics.introduction.title}
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            {data.mainTopics.introduction.points.map((point, index) => (
              <li key={index} className="text-lg text-gray-700 hover:text-gray-900">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Komponent turlari */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.mainTopics.componentTypes.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.mainTopics.componentTypes.types.map((type, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {type.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg w-full whitespace-pre-wrap break-words">
                  <code className="font-mono text-sm block">
                    {type.example}
                  </code>
                </pre>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hooks sektsiyasi */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.mainTopics.hooks.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.mainTopics.hooks.hooksList.map((hook, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                  {hook.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {hook.description}
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg w-full whitespace-pre-wrap break-words">
                  <code className="font-mono text-sm block">
                    {hook.example}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Lifecycle Methods */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.mainTopics.componentLifecycle.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.mainTopics.componentLifecycle.phases.map((phase, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {phase.name}
                </h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <ul className="list-disc pl-4">
                  {phase.methods.map((method, idx) => (
                    <li key={idx} className="text-gray-700">{method}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Props Bilan Ishlash */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.mainTopics.props.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.mainTopics.props.concepts.map((concept, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {concept.name}
                </h3>
                <p className="text-gray-600 mb-4">{concept.description}</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="font-mono text-sm">{concept.example}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Asosiy React Komponentlari */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.basicComponents.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.basicComponents.components.map((component, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {component.name}
                </h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="font-mono text-sm">{component.example}</code>
                </pre>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Props:</h4>
                  <ul className="list-disc pl-5">
                    {component.props.map((prop, idx) => (
                      <li key={idx} className="text-gray-600">{prop}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Foydali Kutubxonalar */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.additionalLibraries.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.additionalLibraries.libraries.map((library, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {library.name}
                </h3>
                <p className="text-gray-600 mb-4">{library.description}</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="font-mono text-sm">{library.example}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Ko'p Uchraydigan Xatolar */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.commonMistakes.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.commonMistakes.mistakes.map((mistake, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {mistake.name}
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-600 font-semibold">Noto'g'ri:</p>
                    <code className="block mt-2 text-red-800">{mistake.wrong}</code>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-600 font-semibold">To'g'ri:</p>
                    <code className="block mt-2 text-green-800">{mistake.correct}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Optimizatsiyasi */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.performance.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.performance.techniques.map((technique, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {technique.name}
                </h3>
                <p className="text-gray-600 mb-4">{technique.description}</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="font-mono text-sm">{technique.example}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Amaliy misollar */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
            {data.practicalExamples.title}
          </h2>
          <div className="grid gap-8">
            {data.practicalExamples.examples.map((example, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {example.name}
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="font-mono text-sm">
                    {example.code}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactComponentsBosh
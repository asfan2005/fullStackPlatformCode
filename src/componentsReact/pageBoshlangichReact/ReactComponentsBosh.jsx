import React from 'react'
import dataReactComponentlar from '../dataBoshlangichReact/dataReactComponentlar'

function ReactComponentsBosh() {
  const data = dataReactComponentlar[0] // Birinchi element

  return (
    <div className="container mx-auto p-6">
      {/* Asosiy sarlavha */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">{data.title}</h1>
        <p className="text-xl mt-2">{data.description}</p>
        <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-lg mt-4"/>
      </div>

      {/* Asosiy mavzular */}
      <div className="grid gap-8">
        {/* Kirish qismi */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{data.mainTopics.introduction.title}</h2>
          <ul className="list-disc pl-6">
            {data.mainTopics.introduction.points.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
        </div>

        {/* Komponent turlari */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{data.mainTopics.componentTypes.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.mainTopics.componentTypes.types.map((type, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                <p className="mb-3">{type.description}</p>
                <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                  <code>{type.example}</code>
                </pre>
                <ul className="mt-3 list-disc pl-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hooks */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{data.mainTopics.hooks.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.mainTopics.hooks.hooksList.map((hook, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{hook.name}</h3>
                <p className="mb-3">{hook.description}</p>
                <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                  <code>{hook.example}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Amaliy misollar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{data.practicalExamples.title}</h2>
          <div className="grid gap-6">
            {data.practicalExamples.examples.map((example, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{example.name}</h3>
                <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
                  <code>{example.code}</code>
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
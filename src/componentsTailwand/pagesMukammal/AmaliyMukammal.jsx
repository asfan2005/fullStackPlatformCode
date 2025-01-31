import React, { useState } from 'react'
import dataAmaliyMukammal, { additionalResources } from '../dataMukammal/dataAmaliyMukammal'

function AmaliyMukammal() {
  const [selectedLevel, setSelectedLevel] = useState('all')

  const filteredProjects = selectedLevel === 'all' 
    ? dataAmaliyMukammal 
    : dataAmaliyMukammal.filter(project => project.level === selectedLevel)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Tailwind CSS Amaliy Loyihalar
          </h1>
          <p className="text-xl text-indigo-100">
            Oddiydan murakkabgacha bo'lgan amaliy loyihalar to'plami
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {["all", "Boshlang'ich", "O'rta", "Murakkab", "Mukammal", "Mukammal+"].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                selectedLevel === level
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-indigo-50'
              }`}
            >
              {level === 'all' ? 'Hammasi' : level}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    project.level === "Boshlang'ich" ? "bg-green-100 text-green-800" :
                    project.level === "O'rta" ? "bg-yellow-100 text-yellow-800" :
                    project.level === "Murakkab" ? "bg-orange-100 text-orange-800" :
                    project.level === "Mukammal" ? "bg-red-100 text-red-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {project.level}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tasks List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Vazifalar:
                  </h4>
                  <ul className="space-y-2">
                    {project.tasks.map((task, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Section */}
                {project.resources && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Resurslar:
                    </h4>
                    <div className="space-y-4">
                      {/* Tutorials */}
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">O'quv qo'llanmalar:</h5>
                        <ul className="list-disc list-inside text-gray-600 ml-2">
                          {project.resources.tutorials.map((tutorial, index) => (
                            <li key={index}>{tutorial}</li>
                          ))}
                        </ul>
                      </div>
                      {/* Tools */}
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Kerakli toollar:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.resources.tools.map((tool, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {project.expectedTime}
                  </div>
                  <a
                    href={`https://github.com/your-username/${project.githubRepo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AmaliyMukammal
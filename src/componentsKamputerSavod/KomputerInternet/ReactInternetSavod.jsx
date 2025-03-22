import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { internetVideoData } from './dataVideoInternet'
import { internetData } from './dataInternetSavod'

function ReactInternetSavod() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Orqaga
      </button>

      {/* Video darsliklar bo'limi */}
      <div className="mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={internetVideoData.mainImage}
              alt="Internet kursi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{internetVideoData.title}</h2>
            <p className="text-gray-600 mb-4">{internetVideoData.description}</p>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <span>Muallif: {internetVideoData.author}</span>
              <span>Oxirgi yangilanish: {internetVideoData.lastUpdate}</span>
              <span>Jami videolar: {internetVideoData.statistics.totalVideos}</span>
              <span>O'rtacha reyting: {internetVideoData.statistics.averageRating}/5</span>
            </div>
          </div>
        </div>

        {/* Statistika */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold text-blue-700">{internetVideoData.statistics.studentsCount.toLocaleString()}</p>
            <p className="text-gray-700">O'quvchilar</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold text-green-700">{internetVideoData.statistics.totalHours} soat</p>
            <p className="text-gray-700">Video darslar</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-700">{internetVideoData.statistics.certificatesIssued.toLocaleString()}</p>
            <p className="text-gray-700">Sertifikatlar</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold text-yellow-700">{internetVideoData.statistics.coursesCompleted.toLocaleString()}</p>
            <p className="text-gray-700">Tugatilgan kurslar</p>
          </div>
        </div>

        {/* Kategoriyalar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {internetVideoData.categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              style={{ borderLeft: `4px solid ${category.color}` }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-600">{category.skillLevel}</span>
                <span className="text-gray-500">{category.estimatedTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video kartochkalar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {internetVideoData.videos.map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img 
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
                {/* Ko'rish tugmasi */}
                <button
                  onClick={() => setShowModal(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <span>Ko'rish</span>
                  </div>
                </button>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    video.level === "Boshlang'ich" ? "bg-green-100 text-green-800" :
                    video.level === "O'rta" ? "bg-blue-100 text-blue-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {video.level}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{video.views.toLocaleString()} ko'rildi</span>
                    <span>{video.likes.toLocaleString()} like</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* O'rganish yo'l xaritasi */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">O'rganish yo'l xaritasi</h2>
          <div className="space-y-6">
            {internetVideoData.learningPath.map((stage) => (
              <div key={stage.stage} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Bosqich {stage.stage}: {stage.name}
                  <span className="ml-2 text-sm text-gray-500">({stage.duration})</span>
                </h3>
                <div className="mt-2">
                  <h4 className="text-md font-semibold text-gray-700">Ko'nikmalar:</h4>
                  <ul className="list-disc list-inside ml-2 text-gray-600">
                    {stage.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Foydali maslahatlar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Foydali maslahatlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internetVideoData.tipsTricks.map((section) => (
              <div key={section.id} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Muammolar va yechimlar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ko'p uchraydigan muammolar</h2>
          <div className="space-y-4">
            {internetVideoData.commonIssues.map((issue) => (
              <div key={issue.id} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-2">{issue.problem}</h3>
                <p className="text-gray-700">{issue.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Atamalar lug'ati */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Internet atamalar lug'ati</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internetVideoData.glossary.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.term}</h3>
                <p className="text-gray-600">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Klaviatura yorliqlari */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tez klaviatura tugmalari</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internetVideoData.shortcuts.map((shortcut, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">{shortcut.key}</code>
                <span className="text-gray-700">{shortcut.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikatsiya */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sertifikatsiya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {internetVideoData.certification.levels.map((level, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">{level.name}</h3>
                <ul className="space-y-2">
                  {level.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Imtihon ma'lumotlari</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-gray-600">Davomiyligi</p>
                <p className="text-xl font-bold text-gray-800">{internetVideoData.certification.examDetails.duration}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Savollar soni</p>
                <p className="text-xl font-bold text-gray-800">{internetVideoData.certification.examDetails.questionsCount}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">O'tish bali</p>
                <p className="text-xl font-bold text-gray-800">{internetVideoData.certification.examDetails.passingScore}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internet ma'lumotlari bo'limi */}
      {internetData.map((section) => (
        <div 
          key={section.id} 
          className="mb-8 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">{section.section}</h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">{section.title}</h3>

          {/* Asosiy ma'lumot */}
          {section.description && (
            <p className="mb-4 text-gray-600 leading-relaxed">{section.description}</p>
          )}

          {/* Vaqt chizig'i */}
          {section.timeline && (
            <div className="space-y-3 ml-4">
              {section.timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-2 p-2 hover:bg-gray-50 rounded">
                  <span className="font-bold text-blue-500 min-w-[60px]">{item.year}:</span>
                  <span className="text-gray-700">{item.event}</span>
                </div>
              ))}
            </div>
          )}

          {/* Komponentlar */}
          {section.components && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Komponentlar</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.components.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-blue-700 mb-2">{item.component}</h5>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Xususiyatlar */}
          {section.features && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Xususiyatlar</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.features.map((feature, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Foydalanish */}
          {section.usage && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Foydalanish</h4>
              <div className="space-y-4">
                {section.usage.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-blue-700 mb-2">{item.area}</h5>
                    <p className="text-gray-600">{item.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Qadamlar */}
          {section.steps && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Qadamlar</h4>
              <div className="space-y-4">
                {section.steps.map((step) => (
                  <div key={step.step} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">
                        {step.step}
                      </span>
                      <h5 className="font-semibold text-blue-700">{step.action}</h5>
                    </div>
                    <p className="text-gray-600 ml-11">{step.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Texnologiyalar */}
          {section.technologies && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Texnologiyalar</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.technologies.map((tech, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-blue-700 mb-2">{tech.tech}</h5>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Maslahatlar */}
          {section.tips && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Foydali maslahatlar</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.tips.map((tip, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg flex items-start">
                    <span className="text-green-500 mt-1 mr-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Faktlar */}
          {section.facts && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Qiziqarli faktlar</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.facts.map((fact, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg flex items-start">
                    <span className="text-yellow-500 mr-2">★</span>
                    <span className="text-gray-700">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tezliklar */}
          {section.speeds && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Internet tezliklari</h4>
              <div className="space-y-4">
                {section.speeds.map((speed, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="text-lg font-semibold text-blue-700 mb-2">{speed.type}</h5>
                    <p className="text-blue-500 font-medium mb-2">Tezlik: {speed.speed}</p>
                    <p className="text-gray-600 mb-4">{speed.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-semibold text-gray-700 mb-2">Afzalliklari:</h6>
                        <ul className="list-disc list-inside space-y-1">
                          {speed.advantages.map((adv, i) => (
                            <li key={i} className="text-gray-600">{adv}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-gray-700 mb-2">Kamchiliklari:</h6>
                        <ul className="list-disc list-inside space-y-1">
                          {speed.disadvantages.map((dis, i) => (
                            <li key={i} className="text-gray-600">{dis}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* O'lchov birliklari */}
          {section.measurementUnits && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">O'lchov birliklari</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(section.measurementUnits).map(([key, value]) => (
                  <div key={key} className="p-3 bg-white rounded-lg">
                    <span className="font-semibold text-blue-600">{key}:</span>
                    <span className="ml-2 text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Batafsil ma'lumotlar */}
          {section.details && (
            <div className="mt-4">
              {section.details.description && (
                <p className="text-gray-600 mb-4">{section.details.description}</p>
              )}
              
              {section.details.history && (
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <h4 className="text-xl font-semibold text-blue-600 mb-3">Tarixiy ma'lumotlar</h4>
                  <p className="mb-2">
                    <span className="font-semibold">Ixtiro qilingan:</span>
                    <span className="ml-2 text-gray-700">{section.details.history.invented}</span>
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Ixtirochi:</span>
                    <span className="ml-2 text-gray-700">{section.details.history.inventor}</span>
                  </p>
                  <div className="mt-3">
                    <h5 className="font-semibold mb-2">Rivojlanish tarixi:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {section.details.history.evolution.map((ev, i) => (
                        <li key={i} className="text-gray-600">{ev}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.details.categories && (
                <div className="grid gap-4">
                  {section.details.categories.map((cat, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-blue-700 mb-3">{cat.name}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <p><span className="font-medium">Tezlik:</span> {cat.speed}</p>
                        <p><span className="font-medium">Kabel:</span> {cat.cable}</p>
                        <p><span className="font-medium">Maksimal uzunlik:</span> {cat.maxLength}</p>
                        <p><span className="font-medium">Ishlatilishi:</span> {cat.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Xavfsizlik */}
          {section.security && section.security.threats && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Xavfsizlik masalalari</h4>
              <div className="space-y-4">
                {section.security.threats.map((threat, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-red-600 mb-2">{threat.name}</h5>
                    <p className="text-gray-600 mb-3">{threat.description}</p>
                    {threat.prevention && (
                      <div>
                        <h6 className="font-semibold text-gray-700 mb-2">Oldini olish choralari:</h6>
                        <ul className="list-disc list-inside space-y-1">
                          {threat.prevention.map((prev, i) => (
                            <li key={i} className="text-gray-600">{prev}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Protokollar */}
          {section.protocols && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Internet protokollari</h4>
              <div className="space-y-4">
                {section.protocols.map((protocol, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-blue-700 mb-2">{protocol.name}</h5>
                    <p className="text-gray-600 mb-3">{protocol.description}</p>

                    {protocol.details && (
                      <div className="mt-3">
                        <h6 className="font-semibold text-gray-700 mb-2">Tafsilotlar:</h6>
                        {typeof protocol.details.fullName === 'string' ? (
                          <p className="text-gray-600">{protocol.details.fullName}</p>
                        ) : (
                          <div className="space-y-1">
                            {protocol.details.fullName?.http && (
                              <p className="text-gray-600">HTTP: {protocol.details.fullName.http}</p>
                            )}
                            {protocol.details.fullName?.https && (
                              <p className="text-gray-600">HTTPS: {protocol.details.fullName.https}</p>
                            )}
                          </div>
                        )}

                        {protocol.details.purpose && (
                          <div className="mt-2">
                            <h6 className="font-semibold text-gray-700 mb-1">Maqsadi:</h6>
                            <ul className="list-disc list-inside space-y-1">
                              {protocol.details.purpose.map((item, i) => (
                                <li key={i} className="text-gray-600">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {protocol.details.components && (
                          <div className="mt-3">
                            <h6 className="font-semibold text-gray-700 mb-2">Komponentlar:</h6>
                            {protocol.details.components.map((comp, i) => (
                              <div key={i} className="mb-2">
                                <p className="font-medium text-blue-600">{comp.name}</p>
                                <p className="text-gray-600 ml-4">{comp.role}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Video ko'rish modali */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {/* Modal header */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Video darslar tez kunda
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>

              {/* Modal body */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col items-center">
                  {/* Video placeholder */}
                  <div className="w-full aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <svg 
                        className="mx-auto h-12 w-12 text-gray-400 mb-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Video darslar tez kunda qo'shiladi
                      </h3>
                      <p className="text-gray-500">
                        Hozirda video darslar tayyorlanmoqda. Tez orada web-saytga qo'shiladi.
                      </p>
                    </div>
                  </div>

                  {/* Loading animation */}
                  <div className="flex items-center space-x-2 text-blue-600">
                    <div className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReactInternetSavod
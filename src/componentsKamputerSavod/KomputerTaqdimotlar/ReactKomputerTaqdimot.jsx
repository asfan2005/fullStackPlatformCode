import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { powerPointData } from './dataKompurTaqdimot.js'
import powerPointVideoData from './dataVideoKomputer'
import { FaGraduationCap, FaLightbulb, FaExclamationTriangle, FaBook, FaKeyboard } from 'react-icons/fa'

function ReactKomputerTaqdimot() {
  const navigate = useNavigate();
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [videoSearchTerm, setVideoSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoSectionRef = useRef(null);
  
  const handleBack = () => {
    try {
      navigate('/');  // Asosiy sahifaga yo'naltirish
    } catch (error) {
      console.error("Navigatsiya xatosi:", error);
    }
  };

  // Har bir bo'lim uchun alohida komponent
  const SectionFeatures = ({ features }) => (
    features && (
      <div className="mt-6">
        <h4 className="font-semibold text-gray-800 mb-3">Maxsus funksiyalar:</h4>
        {features.map((feature, index) => (
          <div key={index} className="mb-4">
            <h5 className="font-medium text-blue-700">{feature.name}</h5>
            <p className="text-gray-600">{feature.description}</p>
            {feature.examples && (
              <ul className="list-disc list-inside mt-2">
                {feature.examples.map((example, i) => (
                  <li key={i} className="text-gray-700">{example}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    )
  );

  // Dizayn prinsiplari komponenti
  const DesignPrinciples = ({ principles }) => (
    principles && (
      <div className="mt-6">
        <h4 className="font-semibold text-gray-800 mb-3">Dizayn prinsiplari:</h4>
        {principles.map((principle, index) => (
          <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-blue-700">{principle.rule}</h5>
            <p className="text-gray-600">{principle.description}</p>
          </div>
        ))}
      </div>
    )
  );

  // Taqdimot strategiyalari komponenti
  const PresentationStrategies = ({ strategies }) => (
    strategies && (
      <div className="mt-6">
        <h4 className="font-semibold text-gray-800 mb-3">Strategiyalar:</h4>
        {strategies.map((strategy, index) => (
          <div key={index} className="mb-4 border-l-4 border-blue-500 pl-4">
            <h5 className="font-medium text-blue-700">{strategy.type}</h5>
            <p className="text-gray-600">{strategy.description}</p>
            {strategy.steps && (
              <ul className="list-disc list-inside mt-2">
                {strategy.steps.map((step, i) => (
                  <li key={i} className="text-gray-700">{step}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    )
  );

  // Video filtrlash funksiyasi
  const getFilteredVideos = () => {
    let filtered = powerPointVideoData.videos.filter(video => 
      video.categoryId === activeCategoryId
    );

    if (videoSearchTerm) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(videoSearchTerm.toLowerCase()) || 
        video.description.toLowerCase().includes(videoSearchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(videoSearchTerm.toLowerCase()))
      );
    }

    return filtered;
  };

  // Video modalini ochish
  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
    document.body.style.overflow = 'hidden';
  };

  // Video modalini yopish
  const closeVideoModal = () => {
    setShowVideoModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4 mb-6">
        <button 
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Asosiy sahifaga qaytish
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">PowerPoint Taqdimotlar</h1>
      
      {/* Asosiy video bo'limi */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src="https://www.duarte.com/wp-content/uploads/2024/05/Everything-you-need-to-know-about-using-speaker-notes-in-powerpoint.jpg"
            alt="PowerPoint kursi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{powerPointVideoData.title}</h2>
          <p className="text-gray-600 mb-4">{powerPointVideoData.description}</p>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
            <span>Muallif: {powerPointVideoData.author}</span>
            <span>Oxirgi yangilanish: {powerPointVideoData.lastUpdate}</span>
            <span>Jami videolar: {powerPointVideoData.statistics.totalVideos}</span>
            <span>O'rtacha reyting: {powerPointVideoData.statistics.averageRating}/5</span>
          </div>
        </div>
      </div>

      {/* Statistika */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-blue-700">{powerPointVideoData.statistics.studentsCount.toLocaleString()}</p>
          <p className="text-gray-700">O'quvchilar</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-green-700">{powerPointVideoData.statistics.totalHours} soat</p>
          <p className="text-gray-700">Video darslar</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-purple-700">{powerPointVideoData.statistics.certificatesIssued.toLocaleString()}</p>
          <p className="text-gray-700">Sertifikatlar</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-yellow-700">{powerPointVideoData.statistics.averageRating}</p>
          <p className="text-gray-700">Reyting</p>
        </div>
      </div>

      {/* O'rganish yo'l xaritasi */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">O'rganish yo'l xaritasi</h2>
        <div className="space-y-6">
          {powerPointVideoData.learningPath.map((stage) => (
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

      {/* Video qidiruv va kategoriyalar */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Video qidirish..."
              value={videoSearchTerm}
              onChange={(e) => setVideoSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {powerPointVideoData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategoryId === category.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Video kartalar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredVideos().map((video) => (
            <div 
              key={video.id} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
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
                  <button
                    onClick={() => openVideoModal(video)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    Ko'rish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kurs afzalliklari */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Kurs afzalliklari</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {powerPointVideoData.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">{selectedVideo.title}</h3>
                <button 
                  onClick={closeVideoModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Video darslik tayyorlanmoqda</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Hurmatli foydalanuvchi, video darsliklar tez orada yuklanadi. 
                    Iltimos, keyinroq qayta urinib ko'ring.
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 mb-3">{selectedVideo.description}</p>
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    selectedVideo.level === "Boshlang'ich" ? "bg-green-100 text-green-800" :
                    selectedVideo.level === "O'rta" ? "bg-blue-100 text-blue-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {selectedVideo.level}
                  </div>
                  <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-800">
                    {selectedVideo.duration}
                  </div>
                  <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-800">
                    {new Date(selectedVideo.publishDate).toLocaleDateString('uz-UZ')}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Ulashish
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                    Saqlash
                  </button>
                </div>
                <button 
                  onClick={closeVideoModal}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {powerPointData.map((section) => (
        <div key={section.id} className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{section.section}</h2>
          <h3 className="text-xl font-medium text-gray-800 mb-3">{section.title}</h3>

          {/* Asosiy ma'lumotlar */}
          {section.description && (
            <p className="text-gray-600 mb-4">{section.description}</p>
          )}

          {/* Maqsad va versiya */}
          {section.purpose && (
            <div className="mb-4">
              <p className="text-gray-700"><span className="font-semibold">Maqsad:</span> {section.purpose}</p>
              <p className="text-gray-700"><span className="font-semibold">Oxirgi versiya:</span> {section.latestVersion}</p>
            </div>
          )}

          {/* Platformalar */}
          {section.platforms && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Platformalar:</h4>
              <div className="flex gap-2 flex-wrap">
                {section.platforms.map((platform, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Qadamlar */}
          {section.steps && (
            <div className="space-y-6">
              {section.steps.map((step) => (
                <div key={step.step} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-lg text-blue-800">
                    {step.step}. {step.action}
                  </h4>
                  <p className="text-gray-600 mt-2">{step.details}</p>
                  
                  {step.note && (
                    <p className="text-blue-600 italic mt-2">Eslatma: {step.note}</p>
                  )}

                  {/* Yangi: Options */}
                  {step.options && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-800">Variantlar:</h5>
                      <ul className="list-disc list-inside text-gray-700">
                        {step.options.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Yangi: Settings */}
                  {step.settings && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-800">Sozlamalar:</h5>
                      <ul className="list-disc list-inside text-gray-700">
                        {step.settings.map((setting, index) => (
                          <li key={index}>{setting}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Yangi: Playback Options */}
                  {step.playbackOptions && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-800">Ijro parametrlari:</h5>
                      <ul className="list-disc list-inside text-gray-700">
                        {step.playbackOptions.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Yangi: Placement Tips */}
                  {step.placementTips && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-800">Joylashtirish bo'yicha maslahatlar:</h5>
                      <ul className="list-disc list-inside text-gray-700">
                        {step.placementTips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Mavjud bo'limlar */}
                  {step.layouts && (
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                      {step.layouts.map((layout, index) => (
                        <li key={index}>{layout}</li>
                      ))}
                    </ul>
                  )}
                  
                  {step.formattingOptions && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-800">Formatlash variantlari:</h5>
                      <ul className="list-disc list-inside text-gray-700">
                        {step.formattingOptions.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.types && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-800">Turlar:</h5>
                      <ul className="list-disc list-inside text-gray-700">
                        {step.types.map((type, index) => (
                          <li key={index}>{type}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {step.saveOptions && (
                    <div className="mt-2">
                      <h5 className="font-medium text-gray-800">Saqlash variantlari:</h5>
                      <ul className="list-disc list-inside text-gray-700">
                        {step.saveOptions.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Recommendations */}
          {section.recommendations && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Tavsiyalar:</h4>
              <ul className="space-y-2">
                {section.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Troubleshooting */}
          {section.troubleshooting && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Muammolarni bartaraf etish:</h4>
              <ul className="space-y-2">
                {section.troubleshooting.map((trouble, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-700">{trouble}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mavjud bo'limlar */}
          {section.tips && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Foydali maslahatlar:</h4>
              <ul className="space-y-2">
                {section.tips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {section.formats && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Fayl formatlari:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.formats.map((format, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-700">{format.format}</h5>
                    <p className="text-gray-600">{format.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section.systemRequirements && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Tizim talablari:</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><span className="font-semibold">Operatsion tizim:</span> {section.systemRequirements.os}</p>
                <p className="text-gray-700"><span className="font-semibold">RAM:</span> {section.systemRequirements.ram}</p>
                <p className="text-gray-700"><span className="font-semibold">Xotira:</span> {section.systemRequirements.storage}</p>
              </div>
            </div>
          )}

          {/* Yangi qo'shilgan komponentlar */}
          <SectionFeatures features={section.features} />
          <DesignPrinciples principles={section.principles} />
          <PresentationStrategies strategies={section.strategies} />
        </div>
      ))}
    </div>
  )
}

export default ReactKomputerTaqdimot
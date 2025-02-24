import React from 'react'
import { useNavigate } from 'react-router-dom'
import { powerPointData } from './dataKompurTaqdimot.js'

function ReactKomputerTaqdimot() {
  const navigate = useNavigate();
  
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
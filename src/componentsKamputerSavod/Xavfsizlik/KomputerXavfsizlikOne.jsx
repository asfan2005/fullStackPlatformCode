import React from 'react';
import { computerSecurityData } from './dataXavsizlik';
import { useNavigate } from 'react-router-dom';

const KomputerXavfsizlikOne = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 w-full">
      {/* Asosiy sahifaga qaytish tugmasi */}
      <div className="container mx-auto px-4 mb-6">
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center gap-2"
        >
          <span>&#8592;</span> Asosiy sahifaga qaytish  
        </button>
      </div>
      <div className="container mx-auto px-4 max-w-full">
        {computerSecurityData.map((section) => (
          <div 
            key={section.id} 
            className="mb-10 bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.01] transition-all duration-300 w-full"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-700 border-b pb-4 w-full">
              {section.title}
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {section.title}
            </h3>

            {section.description && (
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">{section.description}</p>
              </div>
            )}

            {section.purpose && (
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700">
                  <span className="font-bold text-green-700">Maqsad: </span>
                  {section.purpose}
                </p>
              </div>
            )}

            {section.importance && (
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700">
                  <span className="font-bold text-blue-700">Ahamiyati: </span>
                  {section.importance}
                </p>
              </div>
            )}

            {section.threats && (
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-red-600">Tahdidlar</h4>
                <div className="grid gap-4">
                  {section.threats.map((threat, index) => (
                    <div key={index} className="bg-red-50 p-6 rounded-lg">
                      <h5 className="font-bold text-red-700 mb-2">{threat.threat}</h5>
                      <p className="text-gray-700">{threat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.methods && (
              <div className="mb-8 w-full">
                <h4 className="text-xl font-bold mb-4 text-purple-600">Himoya usullari</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.methods.map((method, index) => (
                    <div key={index} className="bg-purple-50 p-6 rounded-lg">
                      <h5 className="font-bold text-purple-700 mb-2">{method.method}</h5>
                      <p className="text-gray-700 mb-3">{method.details}</p>
                      {method.examples && (
                        <p className="text-sm text-purple-600">
                          <span className="font-semibold">Misollar: </span>
                          {method.examples.join(', ')}
                        </p>
                      )}
                      {method.tip && (
                        <p className="text-sm text-blue-600 mt-2">
                          <span className="font-semibold">💡 Maslahat: </span>
                          {method.tip}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Xavfsizlikni ta'minlash jarayoni */}
            {section.steps && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Xavfsizlik bosqichlari:</h4>
                {section.steps.map((step) => (
                  <div key={step.step} className="mb-3 bg-gray-50 p-3 rounded">
                    <h5 className="font-semibold">
                      {step.step}. {step.action}
                    </h5>
                    <p>{step.details}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Vositalar bo'limi */}
            {section.tools && (
              <div className="mb-4 w-full">
                <h4 className="font-semibold mb-2">Xavfsizlik vositalari:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.tools.map((tool, index) => (
                    <div key={index} className="border p-3 rounded bg-gray-50">
                      <h5 className="font-semibold">{tool.tool}</h5>
                      <p>Dasturlar: {tool.examples.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Texnologiyalar bo'limi */}
            {section.technologies && (
              <div className="mb-4 w-full">
                <h4 className="font-semibold mb-2">Xavfsizlik texnologiyalari:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.technologies.map((tech, index) => (
                    <div key={index} className="border p-3 rounded bg-gray-50">
                      <h5 className="font-semibold">{tech.tech}</h5>
                      <p>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Foydali maslahatlar */}
            {section.tips && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Foydali maslahatlar:</h4>
                <ul className="list-disc pl-6">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="mb-2">{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Faktlar bo'limi */}
            {section.facts && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Muhim faktlar:</h4>
                <ul className="list-disc pl-6">
                  {section.facts.map((fact, index) => (
                    <li key={index} className="mb-2">{fact}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Standartlar bo'limi */}
            {section.standards && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Xavfsizlik standartlari:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.standards.map((standard, index) => (
                    <div key={index} className="border p-3 rounded bg-gray-50">
                      <h5 className="font-semibold">{standard.standard}</h5>
                      <p>{standard.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Measures section */}
            {section.measures && (
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-teal-600">Tashkilot choralari</h4>
                <div className="grid gap-4">
                  {section.measures.map((item, index) => (
                    <div key={index} className="bg-teal-50 p-6 rounded-lg">
                      <h5 className="font-bold text-teal-700 mb-2">{item.measure}</h5>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Best Practices section */}
            {section.bestPractices && (
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-blue-600">Eng yaxshi amaliyotlar</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {section.bestPractices.map((practice, index) => (
                    <li key={index} className="text-gray-700">{practice}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mobile Security section */}
            {section.mobileSecurity && (
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-indigo-600">Mobil xavfsizlik</h4>
                {section.mobileSecurity.map((item, index) => (
                  <div key={index} className="bg-indigo-50 p-6 rounded-lg mb-4">
                    <h5 className="font-bold text-indigo-700 mb-4">{item.aspect}</h5>
                    
                    {item.tips && (
                      <div className="mb-4">
                        <h6 className="font-semibold text-indigo-600 mb-2">Maslahatlar:</h6>
                        <ul className="list-disc pl-6 space-y-1">
                          {item.tips.map((tip, idx) => (
                            <li key={idx} className="text-gray-700">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.recommendations && (
                      <div className="mb-4">
                        <h6 className="font-semibold text-indigo-600 mb-2">Tavsiyalar:</h6>
                        <ul className="list-disc pl-6 space-y-1">
                          {item.recommendations.map((rec, idx) => (
                            <li key={idx} className="text-gray-700">{rec}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.practices && (
                      <div className="mb-4">
                        <h6 className="font-semibold text-indigo-600 mb-2">Amaliyotlar:</h6>
                        <ul className="list-disc pl-6 space-y-1">
                          {item.practices.map((practice, idx) => (
                            <li key={idx} className="text-gray-700">{practice}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.dataProtection && (
                      <div className="mb-4">
                        <h6 className="font-semibold text-indigo-600 mb-2">Ma'lumotlarni himoyalash:</h6>
                        <ul className="list-disc pl-6 space-y-1">
                          {item.dataProtection.map((protection, idx) => (
                            <li key={idx} className="text-gray-700">{protection}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Security Tools section */}
            {section.securityTools && (
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-purple-600">Xavfsizlik vositalari</h4>
                <div className="grid gap-4">
                  {section.securityTools.map((tool, index) => (
                    <div key={index} className="bg-purple-50 p-6 rounded-lg">
                      <h5 className="font-bold text-purple-700 mb-2">{tool.category}</h5>
                      <p className="text-gray-700">
                        <span className="font-semibold">Misollar: </span>
                        {tool.examples.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KomputerXavfsizlikOne;
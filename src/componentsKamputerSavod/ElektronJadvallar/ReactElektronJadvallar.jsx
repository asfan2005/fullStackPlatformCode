import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleStudentData, excelTutorialData, excelFormulasData, excelAdvancedData, excelTipsData } from './dataElektronJadvallar';

function ReactElektronJadvallar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [showTutorial, setShowTutorial] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [activeTab, setActiveTab] = useState('data');

  // Qidiruv va filtrlash funksiyasi
  const filteredData = sampleStudentData.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const gradeMatch = selectedGrade === 'all' || item.grade === selectedGrade;
    return nameMatch && gradeMatch;
  });

  // Statistikani hisoblash
  const stats = {
    totalStudents: filteredData.length,
    averageScore: (filteredData.reduce((acc, curr) => acc + curr.score, 0) / filteredData.length).toFixed(1),
    gradeDistribution: filteredData.reduce((acc, curr) => {
      acc[curr.grade] = (acc[curr.grade] || 0) + 1;
      return acc;
    }, {})
  };

  // Saralash funksiyasi
  const sortData = (key) => { 
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Orqaga
      </button>

      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Elektron Jadvallar
      </h1>

      <div className="mb-6 flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-4 flex-1">
          <input
            type="text"
            placeholder="Ism bo'yicha qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Barcha baholar</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('data')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'data' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Ma'lumotlar
          </button>
          <button
            onClick={() => setActiveTab('tutorial')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'tutorial' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Qo'llanma
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'formulas' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Formulalar
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'tips' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Maslahatlar
          </button>
        </div>
      </div>

      {activeTab === 'data' && (
        <>
          <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  {['id', 'name', 'score', 'grade'].map((key) => (
                    <th
                      key={key}
                      onClick={() => sortData(key)}
                      className="px-6 py-3 border-b cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {sortConfig.key === key && (
                        <span className="ml-2">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4">{item.score}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${item.grade.includes('A+') ? 'bg-green-100 text-green-800' :
                          item.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                          item.grade === 'B+' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'}`}>
                        {item.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">Jami Talabalar</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.totalStudents}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">O'rtacha Ball</h3>
              <p className="text-3xl font-bold text-green-600">{stats.averageScore}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">A+ Baholar</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {stats.gradeDistribution['A+'] || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-700">Eng Yuqori Ball</h3>
              <p className="text-3xl font-bold text-purple-600">
                {Math.max(...filteredData.map(item => item.score))}
              </p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'tutorial' && (
        <div className="grid gap-4">
          {excelTutorialData.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-blue-600">Qadam {step.step}:</span> {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Misol:</h4>
                {Array.isArray(step.exampleData) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {step.exampleData.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-medium">{item.column}:</span> {item.value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">
                    {typeof step.exampleData === 'object' ? 
                      <><span className="font-medium">{step.exampleData.column}:</span> {step.exampleData.value}</> : 
                      step.exampleData
                    }
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">⚠️ Eslatma: {step.note}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'tips' && (
        <div className="space-y-8">
          {/* Klaviatura yorliqlari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Klaviatura Yorliqlari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {excelTipsData[0].tips.map((tip, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-mono bg-gray-200 px-2 py-1 rounded">{tip.shortcut}</span>
                  <span className="ml-3 text-gray-700">{tip.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Excel bilan ishlash maslahatlari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Excel bilan ishlash maslahatlari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {excelTipsData[1].tips.map((tip, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{tip.title}</h3>
                  <p className="text-gray-700">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'formulas' && (
        <div className="space-y-8">
          {/* Excel Formulalar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Excel Formulalar</h2>
            {excelFormulasData.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.formulas.map((formula, fIndex) => (
                    <div key={fIndex} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-600 mb-2">{formula.name}</h4>
                      <p className="text-gray-600 mb-2">Sintaksis: <code className="bg-gray-100 px-2 py-1 rounded">{formula.syntax}</code></p>
                      <p className="text-gray-700">{formula.description}</p>
                      <div className="mt-2 text-sm text-gray-500">
                        <span className="font-medium">Misol: </span>
                        {formula.example.range && `${formula.example.range} → ${formula.example.result}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Kengaytirilgan Excel Funksiyalari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Kengaytirilgan Excel Funksiyalari</h2>
            {excelAdvancedData.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.functions.map((func, fIndex) => (
                    <div key={fIndex} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-600 mb-2">{func.name}</h4>
                      <p className="text-gray-600 mb-2">Sintaksis: <code className="bg-gray-100 px-2 py-1 rounded">{func.syntax}</code></p>
                      <p className="text-gray-700 mb-2">{func.description}</p>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Misol: </span>
                        {func.example}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Ilg'or mantiqiy funksiyalar */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Ilg'or Mantiqiy Funksiyalar</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {excelFormulasData.find(cat => cat.category === "Ilg'or mantiqiy funksiyalar")?.formulas.map((formula, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">{formula.name}</h4>
                  <p className="text-gray-600 mb-2">Sintaksis: <code className="bg-gray-100 px-2 py-1 rounded">{formula.syntax}</code></p>
                  <p className="text-gray-700 mb-2">{formula.description}</p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Misol: </span>
                    {formula.example.value}
                    <br />
                    <span className="font-medium">Natija: </span>
                    {formula.example.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ma'lumotlarni tahlil qilish funksiyalari */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Ma'lumotlarni Tahlil Qilish Funksiyalari</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {excelFormulasData.find(cat => cat.category === "Ma'lumotlarni tahlil qilish funksiyalari")?.formulas.map((formula, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">{formula.name}</h4>
                  <p className="text-gray-600 mb-2">Sintaksis: <code className="bg-gray-100 px-2 py-1 rounded">{formula.syntax}</code></p>
                  <p className="text-gray-700 mb-2">{formula.description}</p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Misol: </span>
                    {formula.example.value}
                    <br />
                    <span className="font-medium">Natija: </span>
                    {formula.example.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReactElektronJadvallar;
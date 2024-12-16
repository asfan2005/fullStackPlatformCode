import React, { useState } from 'react';
import { 
  Trophy, RefreshCw, Info, Menu, 
  Book, Code, Terminal, PenTool, 
  FileText, Play, HelpCircle, 
  Layers, Globe, Cpu 
} from 'lucide-react';
import { DraggableElement } from "./components/DraggableElement";
import { DropZone } from "./components/DropZone";

// Comprehensive HTML Learning Content
const HTML_LEARNING_SECTIONS = [
  {
    title: 'HTML Haqida Umumiy Tushuncha',
    description: 'HTML (Hypertext Markup Language) - veb-sahifalarni yaratishning asosiy tili. U veb-kontentning strukturasini va tarkibini belgilaydi.',
    icon: Globe
  },
  {
    title: 'HTML Hujjatining Tuzilishi',
    description: 'HTML hujjati teglardan iborat bo\'lib, har bir tegning o\'ziga xos vazifasi va ma\'nosi bor. Asosiy tuzilma: <!DOCTYPE>, <html>, <head>, <body>',
    icon: Layers
  },
  {
    title: 'Asosiy Teglar',
    description: 'Sarlavhalar (h1-h6), paragraflar (p), linklar (a), rasmlar (img), ro\'yxatlar (ul, ol), jadvallar (table) va boshqa asosiy teglar.',
    icon: Code
  },
  {
    title: 'Interaktiv Elementlar',
    description: 'Formalar, input elementlari, tugmalar, select menyu va boshqa foydalanuvchi bilan o\'zaro ta\'sir qiluvchi elementlar.',
    icon: Terminal
  },
  {
    title: 'Oddiy Loyihalar',
    description: 'Oddiy veb-sahifalar, shaxsiy portfolio, blog va boshqa kichik loyihalar orqali amaliy bilim olish.',
    icon: PenTool
  }
];

// HTML elementlari haqida batafsil ma'lumot
const HTML_ELEMENT_INFO = {
  'h1': {
    name: 'Sarlavha (Heading) Elementi',
    description: 'h1 - asosiy sarlavha elementi bo\'lib, sahifadagi eng muhim sarlavhani bildiradi.',
    example: '<h1>Mening sevimli hayvonlarim</h1>'
  },
  'p': {
    name: 'Paragraf Elementi',
    description: 'p - matn yozish uchun ishlatiladi. Matnlarni guruhlab, tartibli ko\'rinishda ko\'rsatadi.',
    example: '<p>Bu mening eng sevimli hayvonimning tavsifi.</p>'
  },
  'img': {
    name: 'Rasm (Image) Elementi',
    description: 'img - veb-sahifaga rasm qo\'shish uchun ishlatiladi. src (source) va alt (alternative text) atributlari bilan birga ishlatiladi.',
    example: '<img src="hayvon.jpg" alt="Sevimli hayvon rasmi" />'
  }
};

const CORRECT_SEQUENCE = ['h1', 'p', 'img', 'p'];
const INSTRUCTIONS = [
  'Sevimli hayvoning uchun sarlavha (h1) qo\'shing',
  'Hayvon haqida birinchi paragraf (p) yozing',
  'Hayvonning rasmini (img) qo\'shing',
  'Hayvon haqida qo\'shimcha ma\'lumot (p) yozing',
];

function App() {
  const [placedTags, setPlacedTags] = useState(Array(4).fill(''));
  const [score, setScore] = useState(0);
  const [selectedElementInfo, setSelectedElementInfo] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleDragStart = (tag) => {
    event?.dataTransfer?.setData('text/plain', tag);
  };

  const handleDrop = (index, tag) => {
    const newPlacedTags = [...placedTags];
    newPlacedTags[index] = tag;
    setPlacedTags(newPlacedTags);
    
    if (tag === CORRECT_SEQUENCE[index]) {
      setScore(prev => Math.min(prev + 25, 100));
    }
  };

  const resetGame = () => {
    setPlacedTags(Array(4).fill(''));
    setScore(0);
    setSelectedElementInfo(null);
  };

  const showElementInfo = (tag) => {
    setSelectedElementInfo(HTML_ELEMENT_INFO[tag]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Menu */}
      <div className={`
        fixed inset-y-0 left-0 w-72 bg-white shadow-lg z-50 
        transform transition-transform overflow-y-auto h-full
        ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Book className="mr-3 text-blue-600" /> HTML Darslari
          </h2>
          <nav className="space-y-4">
            {HTML_LEARNING_SECTIONS.map((section, index) => (
              <button 
                key={index}
                onClick={() => setActiveSection(section)}
                className="w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg 
                  flex items-center transition-colors group"
              >
                <section.icon 
                  className="mr-3 text-blue-500 group-hover:text-blue-700" 
                  size={20} 
                />
                <span className="flex-1">{section.title}</span>
                <Play 
                  size={16} 
                  className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </button>
            ))}
          </nav>

          <div className="mt-6 border-t pt-4">
            <button className="w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg flex items-center">
              <HelpCircle className="mr-3 text-green-500" size={20} />
              Yordam
            </button>
            <button className="w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg flex items-center">
              <Cpu className="mr-3 text-purple-500" size={20} />
              Profil
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto h-full">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          className="md:hidden absolute top-4 left-4 z-50"
        >
          <Menu size={24} />
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {/* Sarlavha va skorlar qismi */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-blue-600">HTML O'rganish O'yini</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="text-yellow-500" />
                  <span className="text-xl font-bold">{score}%</span>
                </div>
                <button
                  onClick={resetGame}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <RefreshCw size={20} />
                  Qayta boshlash
                </button>
              </div>
            </div>

            {/* HTML elementlarini drag qilish qismi */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {['h1', 'p', 'img', 'div'].map(tag => (
                <div key={tag} className="relative">
                  <DraggableElement tag={tag} onDragStart={handleDragStart} />
                  <button 
                    onClick={() => showElementInfo(tag)}
                    className="absolute top-0 right-0 p-1 text-blue-500 hover:bg-blue-100 rounded"
                  >
                    <Info size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Element ma'lumoti modal */}
            {selectedElementInfo && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg max-w-md">
                  <h3 className="text-xl font-bold mb-4">{selectedElementInfo.name}</h3>
                  <p className="mb-4">{selectedElementInfo.description}</p>
                  <p className="bg-gray-100 p-2 rounded font-mono">{selectedElementInfo.example}</p>
                  <button 
                    onClick={() => setSelectedElementInfo(null)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Yopish
                  </button>
                </div>
              </div>
            )}

            {/* Drop zone qismi */}
            <div className="space-y-6">
              {CORRECT_SEQUENCE.map((expectedTag, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-gray-600 font-medium">{INSTRUCTIONS[index]}</p>
                  <DropZone
                    onDrop={(tag) => handleDrop(index, tag)}
                    isCorrect={placedTags[index] ? placedTags[index] === expectedTag : undefined}
                    expectedTag={expectedTag}
                  >
                    {placedTags[index] && (
                      <div className="font-mono text-center">
                        &lt;{placedTags[index]}&gt;
                      </div>
                    )}
                  </DropZone>
                </div>
              ))}
            </div>
          </div>

          {/* O'yin qoidalari */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">O'yin qoidalari:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>HTML elementlarini yuqoridan pastdagi zonalarga sudrab qo'ying</li>
              <li>Har bir to'g'ri joylashtirish uchun 25 ball olasiz</li>
              <li>100% ball to'plashga harakat qiling!</li>
              <li>Elementlar haqida ko'proq ma'lumot olish uchun "info" tugmasini bosing</li>
            </ul>
          </div>
        </div>

        {/* Section Details Modal */}
        {activeSection && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
              <div className="flex items-center mb-6">
                <activeSection.icon className="mr-4 text-blue-600" size={40} />
                <h2 className="text-2xl font-bold">{activeSection.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{activeSection.description}</p>
              <button 
                onClick={() => setActiveSection(null)}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
              >
                Yopish <FileText className="ml-2" size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
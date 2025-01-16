import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import practiceChallenge7 from '../data/dataChallange7';

function Challenge7({ handleSubLessonComplete, activeLesson, activeSubLesson }) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [code, setCode] = useState(practiceChallenge7[0].initialCode);
  const [output, setOutput] = useState('');
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentExercise = practiceChallenge7[currentExerciseIndex];

  useEffect(() => {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
    if (completedLessons['2-7']) {
      setIsCompleted(true);
    }
  }, []);

  const runCode = () => {
    try {
      const sandbox = new Function('console', `
        let consoleOutput = [];
        ${code}
        return consoleOutput;
      `);

      const consoleOutput = [];
      const mockConsole = {
        log: (...args) => consoleOutput.push(args)
      };

      sandbox(mockConsole);
      setOutput(consoleOutput.join('\n'));

      if (currentExercise.checkResult(consoleOutput)) {
        if (currentExerciseIndex < practiceChallenge7.length - 1) {
          setOutput(prevOutput => `${prevOutput}\n✅ To'g'ri! Ajoyib natija!`);
          setTimeout(() => {
            setCurrentExerciseIndex(prev => prev + 1);
            setCode(practiceChallenge7[currentExerciseIndex + 1].initialCode);
            setOutput('');
          }, 1500);
        } else {
          setIsCompleted(true);
          const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
          completedLessons['2-7'] = true;
          localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
          
          try {
            if (typeof handleSubLessonComplete === 'function') {
              handleSubLessonComplete(activeLesson, activeSubLesson, true);
            }
          } catch (error) {
            console.log('handleSubLessonComplete error:', error);
          }
          
          setOutput(prevOutput => `${prevOutput}\n🎉 Barcha mashqlarni muvaffaqiyatli yakunladingiz!`);
        }
      } else {
        setOutput(prevOutput => `${prevOutput}\n❌ Qaytadan urinib ko'ring`);
      }
    } catch (error) {
      setOutput(`Xatolik yuz berdi: ${error.message}`);
    }
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < practiceChallenge7.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setCode(practiceChallenge7[currentExerciseIndex + 1].initialCode);
      setOutput('');
    }
  };

  const handlePrevExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1);
      setCode(practiceChallenge7[currentExerciseIndex - 1].initialCode);
      setOutput('');
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-lg shadow-lg p-6">
      <div className="flex-1 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
              transition-colors">
        {/* Exercise Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {currentExercise.title}
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Mashq {currentExerciseIndex + 1}/{practiceChallenge7.length}
            </span>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4 text-lg">
              {currentExercise.description}
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 font-medium">
                Vazifa: {currentExercise.task}
              </p>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6 shadow-inner">
          <CodeMirror
            value={code}
            height="200px"
            theme={oneDark}
            extensions={[javascript({ jsx: true })]}
            onChange={(value) => setCode(value)}
            className="rounded-lg overflow-hidden"
          />
        </div>

        {/* Output Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Natija
          </h3>
          <div className="bg-gray-100 rounded-lg p-4 min-h-[100px] font-mono text-sm">
            {output || "Natija bu yerda ko'rsatiladi"}
          </div>
        </div>
      </div>

      {/* Hint Modal */}
      {isHintModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-[90%] sm:w-[400px] transform transition-all animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <svg className="w-6 h-6 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Maslahat
              </h3>
              <button
                onClick={() => setIsHintModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-gray-600 mb-4">
              {currentExercise.hint}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsHintModalOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Tushundim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-6">
        <div className="w-full sm:w-auto flex flex-wrap gap-2">
          <button
            className="w-full sm:w-auto flex items-center justify-center text-blue-500 hover:text-blue-600 px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => setIsHintModalOpen(true)}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Maslahat olish
          </button>
          {currentExerciseIndex > 0 && (
            <button
              onClick={handlePrevExercise}
              className="w-full sm:w-auto flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Oldingisi
            </button>
          )}
        </div>
        <div className="w-full sm:w-auto flex flex-wrap gap-2">
          {currentExerciseIndex < practiceChallenge7.length - 1 && (
            <button
              onClick={handleNextExercise}
              className="w-full sm:w-auto flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Keyingisi
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          <button
            onClick={runCode}
            className="w-full sm:w-auto flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Kodni ishga tushirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Challenge7;
import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import practiceSix from '../data/dataChallange6';

function Challange6({ handleSubLessonComplete, activeLesson, activeSubLesson }) {
  const [state, setState] = useState({
    currentExerciseIndex: 0,
    code: practiceSix[0].initialCode,
    output: '',
    isHintModalOpen: false,
    isCompleted: false
  });

  const currentExercise = practiceSix[state.currentExerciseIndex];

  useEffect(() => {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
    if (completedLessons['2-7']) {
      setState(prev => ({ ...prev, isCompleted: true }));
    }
  }, []);

  const runCode = () => {
    try {
      const sandbox = new Function('console', `
        let consoleOutput = [];
        ${state.code}
        return consoleOutput;
      `);

      const consoleOutput = [];
      const mockConsole = {
        log: (...args) => consoleOutput.push(...args)
      };

      sandbox(mockConsole);
      setState(prev => ({ ...prev, output: consoleOutput.join('\n') }));

      if (currentExercise.checkResult(consoleOutput)) {
        if (state.currentExerciseIndex < practiceSix.length - 1) {
          setState(prev => ({ 
            ...prev, 
            output: `${prev.output}\n✅ To'g'ri! Ajoyib natija!` 
          }));
          
          setTimeout(() => {
            setState(prev => ({
              ...prev,
              currentExerciseIndex: prev.currentExerciseIndex + 1,
              code: practiceSix[prev.currentExerciseIndex + 1].initialCode,
              output: ''
            }));
          }, 1500);
        } else {
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
          
          setState(prev => ({
            ...prev,
            isCompleted: true,
            output: `${prev.output}\n🎉 Barcha mashqlarni muvaffaqiyatli yakunladingiz!`
          }));
        }
      } else {
        setState(prev => ({
          ...prev,
          output: `${prev.output}\n❌ Qaytadan urinib ko'ring`
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        output: `Xatolik yuz berdi: ${error.message}`
      }));
    }
  };

  const handleNextExercise = () => {
    if (state.currentExerciseIndex < practiceSix.length - 1) {
      setState(prev => ({
        ...prev,
        currentExerciseIndex: prev.currentExerciseIndex + 1,
        code: practiceSix[prev.currentExerciseIndex + 1].initialCode,
        output: ''
      }));
    }
  };

  const handlePrevExercise = () => {
    if (state.currentExerciseIndex > 0) {
      setState(prev => ({
        ...prev,
        currentExerciseIndex: prev.currentExerciseIndex - 1,
        code: practiceSix[prev.currentExerciseIndex - 1].initialCode,
        output: ''
      }));
    }
  };

  const toggleHintModal = () => {
    setState(prev => ({
      ...prev,
      isHintModalOpen: !prev.isHintModalOpen
    }));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
              transition-colors">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {currentExercise.title}
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              {currentExercise.description}
            </p>
            <div className="text-gray-700 font-medium mb-2">
              Vazifa: {currentExercise.task}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <CodeMirror
              value={state.code}
              height="200px"
              theme={oneDark}
              extensions={[javascript({ jsx: true })]}
              onChange={(value) => setState(prev => ({ ...prev, code: value }))}
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Natija
          </h3>
          <div className="bg-gray-100 rounded-lg p-4 min-h-[100px] font-mono">
            {state.output || "Natija bu yerda ko'rsatiladi"}
          </div>
        </div>
      </div>

      {state.isHintModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-[90%] sm:w-[400px] transform transition-all animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Maslahat 💡
              </h3>
              <button
                onClick={toggleHintModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
            <div className="text-gray-600 mb-4">
              {currentExercise.hint}
            </div>
            <div className="flex justify-end">
              <button
                onClick={toggleHintModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Tushundim
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="w-full sm:w-auto flex flex-wrap gap-2">
          <button
            className="w-full sm:w-auto text-blue-500 hover:text-blue-600 px-4 py-2"
            onClick={toggleHintModal}
          >
            Maslahat olish
          </button>
          {state.currentExerciseIndex > 0 && (
            <button
              onClick={handlePrevExercise}
              className="w-full sm:w-auto bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Oldingisi
            </button>
          )}
        </div>
        <div className="w-full sm:w-auto flex flex-wrap gap-2">
          {state.currentExerciseIndex < practiceSix.length - 1 && (
            <button
              onClick={handleNextExercise}
              className="w-full sm:w-auto bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Keyingisi
            </button>
          )}
          <button
            onClick={runCode}
            className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Kodni ishga tushirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Challange6;
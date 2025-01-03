import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

function Numbers({ handleSubLessonComplete, activeLesson, activeSubLesson }) {
  const [code, setCode] = React.useState('// Raqamlar bilan ishlash\nlet son = 42;\nconsole.log(son);');
  const [output, setOutput] = React.useState('');

  const runCode = () => {
    try {
      const sandbox = new Function('console', `
        let consoleOutput = [];
        ${code}
        return consoleOutput;
      `);

      const consoleOutput = [];
      const mockConsole = {
        log: (...args) => consoleOutput.push(args.join(' '))
      };

      sandbox(mockConsole);
      setOutput(consoleOutput.join('\n'));

      if (consoleOutput[0] === '42') {
        handleSubLessonComplete(activeLesson, activeSubLesson, true);
      }
    } catch (error) {
      setOutput(`Xatolik: ${error.message}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Raqamlar (Numbers)
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              JavaScriptda raqamlar bilan ishlash juda oson. Raqamlarni o'zgaruvchilarga saqlash va ular ustida turli amallar bajarish mumkin.
            </p>
            <div className="text-gray-700 font-medium mb-2">
              Vazifa: Berilgan kodni ishga tushiring va natijani ko'ring.
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <CodeMirror
              value={code}
              height="200px"
              theme={oneDark}
              extensions={[javascript({ jsx: true })]}
              onChange={(value) => setCode(value)}
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Natija
          </h3>
          <div className="bg-gray-100 rounded-lg p-4 min-h-[100px] font-mono">
            {output || "Natija bu yerda ko'rsatiladi"}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button
          className="text-blue-500 hover:text-blue-600"
          onClick={() => alert("Raqamni console.log() orqali chiqaring")}
        >
          Maslahat olish
        </button>
        <button
          onClick={runCode}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Kodni ishga tushirish
        </button>
      </div>
    </div>
  );
}

export default Numbers;
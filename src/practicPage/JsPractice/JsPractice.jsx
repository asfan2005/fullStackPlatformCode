import React, { useState, Fragment, useEffect, act } from 'react'
import practiceDataIntroduction from './data/dataIntroduction';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { Dialog, Transition } from '@headlessui/react';
import { Number,AssignDeclar,StringM,Boolean,NullAndUndifend, ChallangeOne, DataArifmetikOperators, ArifmetikShouts, ComparisionOperators, EqualityStrict, LogicalOperators, LogicalOperators2, ChallangeTwo, ChallangeThree, IfStatment, IfElse, SwitchCasePractice, ChallangeFour, OutputWithVribles,Cast, ChallangeFive, Challange6, ForLop, WhileLoop, Break, Continu, Challange7, DeclareFunkcition, Arguments, Return, RecapChallange9, Challang10, DeclaringArray, AccessingArrayElements, ModifyingArrays, ArrayMethods, Challange11, Challange12 } from '../../components/index';

function JsPractice() {
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeSubLesson, setActiveSubLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : {};
  });
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const lessons = [
    {
      id: 1,
      title: "Introduction",
      subLessons: [
        { id: 1, title: "Introduction" },
        { id: 2, title: "Hello World!" }
      ]
    },
    {
      id: 2,
      title: "Variables",
      subLessons: [
        { id: 3, title: "Numbers" },
        { id: 4, title: "Assignment & Declaration" },
        { id: 5, title: "String" },
        { id: 6, title: "Boolean" },
        { id: 7, title: "Null and Undefined" },
        { id: 8, title: "Recap Challenge #1" }
      ]
    },
    {
      id: 3,
      title: "Operators",
      subLessons: [
        { id: 9, title: "Arithmetic operators" },
        { id: 10, title: "Arithmetic shortcuts" },
        { id: 11, title: "Comparison Operators" },
        { id: 12, title: "Equality & Strict Equality" },
        { id: 13, title: "Logical Operators Part 1" },
        { id: 14, title: "Logical Operators Part 2" },
        { id: 15, title: "Recap Challenge #2" },
        { id: 16, title: "Recap Challenge #3" }
      ]
    },
    {
      id: 4,
      title: "Decision Making",
      subLessons: [
        { id: 17, title: "If Statement" },
        { id: 18, title: "If - Else" },
        { id: 19, title: "Switch Case" },
        { id: 20, title: "Recap Challenge #4" }
      ]
    },
    {
      id: 5,
      title: "Basic IO",
      subLessons: [
        { id: 21, title: "Output with Variables" },
        { id: 22, title: "Cast" },
        { id: 23, title: "Recap Challenge #5" },
        { id: 24, title: "Recap Challenge #6" }
      ]
    },
    {
      id: 6,
      title: "Loops",
      subLessons: [
        { id: 25, title: "For Loop" },
        { id: 26, title: "While Loop" },
        { id: 27, title: "Break" },
        { id: 28, title: "Continue" },
        { id: 29, title: "Recap Challenge #7" }
      ]
    },
    {
      id: 7,
      title: "Functions",
      subLessons: [
        { id: 30, title: "Declare a Function" },
        { id: 31, title: "Arguments" },
        { id: 32, title: "Return" },
        { id: 33, title: "Recap Challenge #9" },
        { id: 34, title: "Recap Challenge #10" }
      ]
    },
    {
      id: 8,
      title: "Array",
      subLessons: [
        { id: 35, title: "Declaring an Array" },
        { id: 36, title: "Accessing Array Elements" },
        { id: 37, title: "Modifying Arrays" },
        { id: 38, title: "Array Methods" },
        { id: 39, title: "Recap Challenge #11" },
        { id: 40, title: "Recap Challenge #12" }
      ]
    },
    {
      id: 9,
      title: "Final Challenges",
      subLessons: [
        { id: 41, title: "Asterisk Pyramid" },
        { id: 42, title: "Transpose an Array" },
        { id: 43, title: "Goods & Construction" }
      ]
    }
  ];

  const calculateProgress = () => {
    const totalSubLessons = lessons.reduce((total, lesson) => 
      total + lesson.subLessons.length, 0
    );

    const completedCount = Object.values(completedLessons)
      .filter(Boolean).length;

    return Math.round((completedCount / totalSubLessons) * 100);
  };

  const handleSubLessonComplete = (lessonId, subLessonId, completed) => {
    const updatedCompletions = { ...completedLessons };
    updatedCompletions[`${lessonId}-${subLessonId}`] = completed;
    
    setCompletedLessons(updatedCompletions);
    localStorage.setItem('completedLessons', JSON.stringify(updatedCompletions));
    
    // Show success modal if completed
    if (completed) {
      setModalMessage("🎉 Tabriklaymiz! Siz vazifani muvaffaqiyatli bajardingiz!");
      setIsSuccessModalOpen(true);
    }
  };

  const handleLessonComplete = (lessonId, isCompleted) => {
    const updatedCompletions = { ...completedLessons };
    const lesson = lessons.find(l => l.id === lessonId);
    
    lesson.subLessons.forEach(subLesson => {
      updatedCompletions[`${lessonId}-${subLesson.id}`] = isCompleted;
    });

    setCompletedLessons(updatedCompletions);
    localStorage.setItem('completedLessons', JSON.stringify(updatedCompletions));
  };

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

      const result = sandbox(mockConsole);
      setOutput(consoleOutput.join('\n'));

      const currentSubLesson = getCurrentSubLesson();
      if (currentSubLesson && currentSubLesson.challenge.expectedOutput === consoleOutput[0]) {
        handleSubLessonComplete(activeLesson, activeSubLesson, true);
      } else if (consoleOutput.length > 0) {
        setModalMessage("⚠️ Kod ishladi, lekin kutilgan natija boshqacha. Qayta urinib ko'ring!");
        setIsSuccessModalOpen(true);
      }
    } catch (error) {
      setOutput(`Xatolik: ${error.message}`);
      setModalMessage("❌ Kodda xatolik bor. Xatolikni to'g'irlab, qayta urinib ko'ring!");
      setIsSuccessModalOpen(true);
    }
  };

  const getCurrentSubLesson = () => {
    if (!activeLesson || !activeSubLesson) return null;
    return practiceDataIntroduction[activeSubLesson - 1];
  };

  const LessonCheckbox = ({ lessonId, subLessonId, isCompleted }) => {
    return (
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          if (subLessonId) {
            handleSubLessonComplete(lessonId, subLessonId, e.target.checked);
          } else {
            handleLessonComplete(lessonId, e.target.checked);
          }
        }}
        className="w-5 h-5 border-2 border-gray-300 rounded-md 
          checked:bg-emerald-500 checked:border-emerald-500
          focus:ring-2 focus:ring-emerald-200
          transition-all duration-200
          cursor-pointer"
      />
    );
  };

  const renderCurrentPage = () => {
    if (!activeSubLesson) return null;

    switch(activeSubLesson) {
      case 3: // Numbers
        return <Number
          handleSubLessonComplete={handleSubLessonComplete}
          activeLesson={activeLesson}
          activeSubLesson={activeSubLesson}
        />;
        case 4: //AssignDeclar
        return <AssignDeclar
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 5: //String
        return <StringM
        handleSubLessonComplete={handleSubLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 6 :// Boolean
        return <Boolean
        handleSubLessonComplete={handleSubLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 7 :// NullAndUndifend
        return <NullAndUndifend
        handleSubLessonComplete={handleSubLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 8 ://challangeOne
        return <ChallangeOne
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 9: //DataArifmetikOperators
        return <DataArifmetikOperators
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 10: //ArifmetikShouts
        return <ArifmetikShouts
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 11: //ComparisionOperators
        return <ComparisionOperators
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 12: //EqualityStrict
        return <EqualityStrict
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 13: //LogicalOperators
        return <LogicalOperators
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 14 ://LogicalOperators2
        return <LogicalOperators2
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 15 ://ChallangeTwo
        return <ChallangeTwo
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 16: //ChallangeThree
        return <ChallangeThree
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 17: //IfStatment
        return <IfStatment
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 18: //IfElse
        return <IfElse
        handleSubLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 19: //SwitchCase
        return <SwitchCasePractice
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 20 ://ChallangeFour
        return <ChallangeFour
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 21 ://OutputWithVribles
        return <OutputWithVribles
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 22: //Cast
        return <Cast 
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 23 : //ChallangeFive
        return <ChallangeFive
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 24 ://Challange6
        return <Challange6
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 25: //ForLop
        return <ForLop
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 26 : //whileLoop
        return <WhileLoop
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 27: //Break
        return <Break
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 28: //Continu
        return <Continu
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 29 : //Challange7
        return <Challange7
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 30 : //DeclareFunkcition
        return <DeclareFunkcition
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 31: //Arguments
        return <Arguments
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 32: //Return
        return <Return
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 33 : //RecapChallange9
        return <RecapChallange9
       handleLessonComplete={handleLessonComplete}
       activeLesson={activeLesson}
       activeSubLesson={activeSubLesson}
       />;
       case 34: //Challang10
       return <Challang10
       handleLessonComplete={handleLessonComplete}
       activeLesson={activeLesson}
       activeSubLesson={activeSubLesson}
       />;
       case 35://DeclaringArray
       return <DeclaringArray
       handleLessonComplete={handleLessonComplete}
       activeLesson={activeLesson}
       activeSubLesson={activeSubLesson}
       />;

       case 36 : //AccessingArrayElements
        return <AccessingArrayElements
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 37: //ModifyingArrays
        return <ModifyingArrays
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 38: //ArrayMethods
        return <ArrayMethods
        handleLessonComplete={handleSubLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 39: //challange11
        return <Challange11
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
        case 40: //challange12 
        return <Challange12
        handleLessonComplete={handleLessonComplete}
        activeLesson={activeLesson}
        activeSubLesson={activeSubLesson}
        />;
      default:
        return getCurrentSubLesson() && (
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
              transition-colors"
            >
              <div className="mb-4 md:mb-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {getCurrentSubLesson().title}
                </h2>
                <div className="prose prose-sm md:prose-base max-w-none">
                  <div className="text-sm md:text-base text-gray-600 mb-4 whitespace-pre-line">
                    {getCurrentSubLesson().description}
                  </div>
                  <div className="text-sm md:text-base text-gray-700 font-medium mb-2 whitespace-pre-line">
                    {getCurrentSubLesson().challenge.text}
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-2 md:p-4 w-full">
                  <CodeMirror
                    value={code}
                    height="200px"
                    theme={oneDark}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value) => setCode(value)}
                    className="rounded-lg overflow-hidden w-full"
                  />
                </div>
              </div>

              <div className="border-t pt-4 md:pt-6 w-full">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
                  Natija
                </h3>
                <div className="bg-gray-100 rounded-lg p-3 md:p-4 min-h-[80px] md:min-h-[100px] font-mono text-sm md:text-base w-full">
                  {output || "Natija bu yerda ko'rsatiladi"}
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 w-full">
              <button
                className="text-blue-500 hover:text-blue-600 text-sm md:text-base"
                onClick={() => {
                  const currentLesson = getCurrentSubLesson();
                  if (currentLesson && currentLesson.hints.length > 0) {
                    alert(currentLesson.hints[0].content);
                  }
                }}
              >
                Maslahat olish
              </button>
              <button
                onClick={runCode}
                className="w-full md:w-auto bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base"
              >
                Kodni ishga tushirish
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-blue-500 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className={`
        fixed md:relative top-0 left-0 z-40
        w-full md:w-96 h-screen bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        overflow-y-auto max-h-screen
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        [&::-webkit-scrollbar-thumb]:rounded-full
        hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
        transition-colors
      `}>
        <div className="p-3 md:p-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">JS Practice</h1>
          
          <div className="space-y-2">
            {lessons.map((lesson) => {
              const isLessonCompleted = lesson.subLessons.every(
                sub => completedLessons[`${lesson.id}-${sub.id}`]
              );

              return (
                <div key={lesson.id} 
                  className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                    isLessonCompleted 
                      ? 'bg-emerald-50/70 border-emerald-200 shadow-sm' 
                      : 'border-gray-200'
                  }`}>
                  <button
                    onClick={() => {
                      setActiveLesson(activeLesson === lesson.id ? null : lesson.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full p-4 text-left flex justify-between items-center transition-colors ${
                      activeLesson === lesson.id 
                        ? 'bg-blue-50/80' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <LessonCheckbox 
                        lessonId={lesson.id}
                        isCompleted={isLessonCompleted}
                      />
                      <span className="text-gray-700 text-lg font-medium">{lesson.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-emerald-600">
                        {lesson.subLessons.filter(sub => completedLessons[`${lesson.id}-${sub.id}`]).length}
                        /{lesson.subLessons.length}
                      </span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${
                          activeLesson === lesson.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeLesson === lesson.id && (
                    <div className="bg-gray-50/50 border-t border-gray-100">
                      {lesson.subLessons.map((subLesson) => {
                        const currentData = practiceDataIntroduction[subLesson.id - 1];
                        
                        return (
                          <button
                            key={subLesson.id}
                            onClick={() => {
                              setActiveSubLesson(subLesson.id);
                              setIsMobileMenuOpen(false);
                              setCurrentLesson(currentData);
                              setCode(currentData?.challenge?.code || '');
                              setOutput('');
                            }}
                            className={`w-full p-3 pl-8 text-left flex items-center space-x-3 transition-all duration-200 ${
                              activeSubLesson === subLesson.id
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            } ${
                              completedLessons[`${lesson.id}-${subLesson.id}`] 
                                ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100/80' 
                                : ''
                            }`}
                          >
                            <div className="relative">
                              <LessonCheckbox 
                                lessonId={lesson.id}
                                subLessonId={subLesson.id}
                                isCompleted={completedLessons[`${lesson.id}-${subLesson.id}`] || false}
                              />
                            </div>
                            <span className="font-medium">{currentData?.title || subLesson.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="bg-gray-100 rounded-full h-2.5 shadow-inner">
              <div 
                className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500
                  shadow-sm"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <div className="text-sm text-emerald-600 font-medium mt-2 text-center">
              {calculateProgress()}% Completed
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 h-screen overflow-hidden">
        <div className="w-full h-full p-4 md:p-8 mt-16 md:mt-0">
          <div className="w-full h-full bg-white rounded-lg shadow-lg p-4 md:p-6">
            {renderCurrentPage()}
          </div>
        </div>
      </div>

      <Transition appear show={isSuccessModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsSuccessModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {modalMessage.includes("Tabriklaymiz") ? 
                      "Muvaffaqiyat! 🎉" : 
                      modalMessage.includes("Kod ishladi") ?
                      "Natija tekshirilmoqda ⚠️" :
                      "Xatolik ❌"}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {modalMessage}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white 
                        ${modalMessage.includes("Tabriklaymiz") ? 
                          "bg-green-500 hover:bg-green-600" : 
                          modalMessage.includes("Kod ishladi") ?
                          "bg-yellow-500 hover:bg-yellow-600" :
                          "bg-red-500 hover:bg-red-600"}`}
                      onClick={() => setIsSuccessModalOpen(false)}
                    >
                      Tushunarli
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default JsPractice
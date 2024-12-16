import React from 'react';

interface DropZoneProps {
  onDrop: (tag: string) => void;
  isCorrect: boolean;
  expectedTag: string;
  children?: React.ReactNode;
}

export function DropZone({ onDrop, isCorrect, expectedTag, children }: DropZoneProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const tag = e.dataTransfer.getData('text/plain');
    onDrop(tag);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`p-4 rounded-lg border-2 border-dashed min-h-[100px] transition-colors ${
        children
          ? 'bg-white'
          : 'bg-gray-50'
      } ${
        isCorrect === true
          ? 'border-green-500 bg-green-50'
          : isCorrect === false
          ? 'border-red-500 bg-red-50'
          : 'border-gray-300'
      }`}
    >
      {children || (
        <div className="text-gray-400 text-center">
          Drop the <code className="font-mono">{expectedTag}</code> element here
        </div>
      )}
    </div>
  );
}
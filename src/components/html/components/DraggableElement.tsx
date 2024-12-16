import React from 'react';

interface DraggableElementProps {
  tag: string;
  onDragStart: (tag: string) => void;
}

export function DraggableElement({ tag, onDragStart }: DraggableElementProps) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(tag)}
      className="bg-blue-100 p-3 rounded-lg cursor-move shadow-sm hover:shadow-md transition-shadow border-2 border-blue-300 text-blue-700 font-mono"
    >
      {tag}
    </div>
  );
}
// src/DragAndDropList.js
import React, { useState } from 'react';
import './DragAndDropList.css';

const DragAndDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData('index');
    const newItems = [...items];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
  };

  return (
    <div className="drag-and-drop-list">
      {items.map((item, index) => (
        <div
          key={index}
          className="drag-item"
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={(e) => e.preventDefault()}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DragAndDropList;

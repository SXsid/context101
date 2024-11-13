import React, { useRef, useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function Todod({ todo, index }) {
  const height= useRef(null)
  const [readonly, setRead] = useState(true);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const { removeTodo, updateTodo, toddgled, handleDragEnd, handleDragEnter, handleDragStart } = useTodo();
  
  const handleClick = (id) => removeTodo(id);
  const toggleEdit = () => {
    if (!readonly) updateTodo(todo.id, { ...todo, todo: newTodo });
    setRead(!readonly);
  };
  const isClicked = () => toddgled(todo.id);
  
  

  return (
    <div
      key={todo.id}
      className={`flex justify-between items-start w-[350px] h-auto mt-2 p-2 rounded-lg shadow-md transition-transform ${
        readonly ? 
          "bg-[rgba(255,255,255,0.82)] bg-opacity backdrop-blur-lg backdrop-filter cursor-pointer hover:shadow-lg hover:transform hover:scale-110 transform transition-transform duration-300" : 
          "bg-green-200"
      }`}
      style={{
        border: "2px solid #38b2ac",
        height: 'auto', // Let the height grow with content
      }}
      draggable={readonly}
      onDragStart={() => handleDragStart(index)}
      onDragEnter={() => handleDragEnter(index)}
      onDragEnd={handleDragEnd}
    >
      <div className="flex items-start gap-4 w-full">
        <input
          type="checkbox"
          onClick={isClicked}
          checked={todo.completed}
          className="h-5 w-5 text-teal-500 border-gray-300 rounded cursor-pointer transition-colors hover:border-teal-500 focus:outline-none"
        />
        <textarea
        ref={height}
          className={`bg-transparent outline-none  h-auto resize-none  w-full p-1 whitespace-pre-wrap  break-words overflow-auto ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          } custom-scrollbar`}
          value={newTodo}
          readOnly={readonly}
          onChange={(e) => setNewTodo(e.target.value)}
          rows={1}  // Starts with 1 row and grows as needed
        />
      </div>
      <div className="flex gap-2">
        {!todo.completed && (
          <button
            onClick={toggleEdit}
            className={`px-4 py-1 rounded-md transition-all ${
              readonly
                ? "bg-teal-500 text-white hover:bg-teal-600"
                : "bg-gray-400 text-gray-700 hover:bg-gray-500"
            }`}
          >
            {readonly ? 'Edit' : 'Save'}
          </button>
        )}
        <button
          onClick={() => handleClick(todo.id)}
          className="h-8 w-8 text-white font-bold rounded-full bg-red-500 hover:bg-red-600 transition-all flex items-center justify-center"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Todod;

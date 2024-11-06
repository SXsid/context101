import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function Todod({ todo, index }) {
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
      className={`flex justify-between items-center w-[1000px] p-4 rounded-lg shadow-md transition-transform ${
        readonly ? "bg-white cursor-pointer hover:shadow-lg" : "bg-green-200"
      }`}
      style={{ border: "2px solid #38b2ac" }}
      draggable={readonly}
      onDragStart={() => handleDragStart(index)}
      onDragEnter={() => handleDragEnter(index)}
      onDragEnd={handleDragEnd}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          onClick={isClicked}
          checked={todo.completed}
          className="h-5 w-5 text-teal-500 border-gray-300 rounded cursor-pointer transition-colors hover:border-teal-500 focus:outline-none"
        />
        <input
          className={`w-auto bg-transparent outline-none ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
          value={newTodo}
          readOnly={readonly}
          onChange={(e) => setNewTodo(e.target.value)}
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

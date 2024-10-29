import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function Todod({ todo }) {
  const [editable, setEdit] = useState(true);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const { removeTodo, updateTodo } = useTodo();

  function handleClick(id) {
    removeTodo(id);
  }

  function toggleEdit() {
    if (!editable) {
      updateTodo(todo.id, { ...todo, todo: newTodo }); // Update the todo when saving
    }
    setEdit(!editable); // Toggle editable state
  }

  return (
    <div key={todo.id} className='flex justify-between w-[1000px] rounded-2xl bg-white border-2 border-teal-300 h-10 px-3 content-center items-center m-2'>
      <input
        className="w-[700px] outline-none"
        value={newTodo}
        readOnly={editable}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div className='flex gap-4'>
        <button 
          className={`${editable ? "bg-green-400" : "bg-gray-600"}`} 
          onClick={toggleEdit}
        >
          {editable ? 'Edit' : 'Save'}
        </button>
        <button 
          onClick={() => handleClick(todo.id)} 
          className='text-red-700 font-extrabold text-xl'
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Todod;

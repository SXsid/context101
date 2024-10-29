import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function Todod({ todo }) {
  const [readonly,setRead] = useState(true);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const { removeTodo, updateTodo,toddgled } = useTodo();

  function handleClick(id) {
    removeTodo(id);
  }

  function toggleEdit(){
    if (!readonly){
      updateTodo(todo.id,{...todo,todo:newTodo})
    }
    setRead(!readonly)
  }
  function isClicked(){
    toddgled(todo.id)
  } 
  
  return (
    <div key={todo.id} className='flex justify-between w-[1000px] rounded-2xl bg-white border-2 border-teal-300 h-10 px-3 content-center items-center m-2'>
      <input type='checkbox' onClick={isClicked}/>
      <input
        className={`w-[700px] outline-none ${todo.completed?"line-through":""}`}
        value={newTodo}
        readOnly={readonly}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div className='flex gap-4'>
        <button 
          className={`${readonly ? "bg-green-400" : "bg-gray-600"}`} 
          onClick={toggleEdit}
        >
          {readonly ? 'Edit' : 'Save'}
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

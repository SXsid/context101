import React, { useState } from 'react';
import Addtodo from './Components/Addtodo';
import { TodoProvider } from './Context/TodoContext';
import Todod from './Components/Todod';

function App() {
  const [Todos, setTodos] = useState([]);

  function setTodo(prop) {
    setTodos(prev => [prop, ...prev]);
  }

  function removeTodo(id) {
    const newTodo = Todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }

  function updateTodo(id, updatedTodo) {
    setTodos(prev => prev.map(prevTodo => (prevTodo.id === id ? updatedTodo : prevTodo))); // Fixed updating logic
  }

  return (
    <TodoProvider value={{ setTodo, removeTodo, Todos, updateTodo }}>
      <Addtodo />
      <div className='items-center flex flex-col'>
        {Todos.map(todo => (
          <Todod key={todo.id} todo={todo} /> 
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;

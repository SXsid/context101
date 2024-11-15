import React, { useEffect, useState, useRef } from 'react';
import Addtodo from './Components/Addtodo';
import { TodoProvider } from './Context/TodoContext';
import Todod from './Components/Todod';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import DropAbleArea from './Components/DropAbleArea';

function App() {
  const [Todos, setTodos] = useState(() => {
    try {
      const savedTodos = JSON.parse(localStorage.getItem('Todos'));
      return savedTodos && Array.isArray(savedTodos) ? savedTodos : [];
    } catch (error) {
      console.error('Error loading Todos from localStorage:', error);
      return [];
    }
  });

  function setTodo(prop) {
    setTodos((prev) => {
      const Index = prev.findIndex((todo) => todo.completed);
      const updated = [...prev];
      if (Index !== -1) {
        updated.splice(Index, 0, prop);
        return updated;
      } else {
        return [...updated, prop];
      }
    });
  }

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(Todos));
  }, [Todos]);

  function removeTodo(id) {
    const newTodo = Todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  function updateTodo(id, updatedTodo) {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo)));
  }

  function toddgled(id) {
    setTodos((prev) => {
      let updatedTodo = null;
      const latestTodos = prev.map((todo) => {
        if (todo.id === id) {
          updatedTodo = { ...todo, completed: !todo.completed };
          return updatedTodo;
        } else {
          return todo;
        }
      });

      if (updatedTodo && updatedTodo.completed) {
        return [...latestTodos.filter((todo) => todo.id !== id), updatedTodo];
      } else {
        const Index = latestTodos.findIndex((todo) => todo.completed);
        if (Index !== -1) {
          const current = [...latestTodos.filter((todo) => todo.id !== id)];
          current.splice(Index, 0, updatedTodo);
          return current;
        } else {
          return latestTodos;
        }
      }
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log(over);
    
    if (!over) return;

    if (active.id !== over.id) {
      
      const oldIndex = Todos.findIndex((todo) => todo.id === active.id);
      
      
      const newIndex = Todos.findIndex((todo) => todo.id === over.id);
      console.log(oldIndex,newIndex);
      setTodos((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <TodoProvider value={{ setTodo, removeTodo, Todos, updateTodo, toddgled }}>
        <Addtodo />
        
        <div className="items-center flex flex-col">
          {Todos.map((todo,index)=>{
             return (<DropAbleArea id={todo.id}>
                <Todod key={todo.id} todo={todo} index={index} />
             </DropAbleArea>)
          })}
        </div>
       
      </TodoProvider>
    </DndContext>
  );
}

export default App;

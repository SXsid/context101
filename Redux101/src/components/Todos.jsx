import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeTodo,updateTodo} from "../features/todo/slice"
function Todos() {
 
  const todos= useSelector(state=>state.todos)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])
  return (
    <div>
      {JSON.stringify(todos)}
      <ol>
        {todos.map(todo=>{
            return(
              <Todoitem key={todo.id} todo={todo}/>
            )
        })}
      </ol>
    </div>
  )
}

function Todoitem({todo}){
  const [data,setData]=useState(todo.todo)
  const [readonly,setReadonly]=useState(true)
  const distpatch =useDispatch()
  function removeHandler(id){
    console.log("hello");
    
    distpatch(removeTodo({id:id}))
  }
  function updateHandler(){
    setReadonly(prev=>!prev)
    if(!readonly){
      distpatch(updateTodo({id:todo.id,todo:data}))
    }
  }
  return(
    <li key={todo.id}>
      <input   value={data} onChange={(e)=>setData(e.target.value)}
      readOnly={readonly}/>
    <button style={{margin:"40px"}} onClick={()=>removeHandler(todo.id)}>delete</button>
    <button onClick={updateHandler}>{readonly?"update":"save"}</button>
    </li>
  )
}
export default Todos

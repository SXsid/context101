import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from "../features/todo/slice"



function ADDTodos() {
    const [input,setInput]=useState("")
    //it will add something in store so we will nedd distpatch the data into the store(those hooks are react-redux not form reduxtoolkit)!!
    const distpatch =useDispatch()
    const handleClick=(e)=>{
        // e.prventDefault()
        //distpathch using reducer to save it in the store(centeral magnement sys)
        distpatch(addTodo({todo:input,completed:false}))
        setInput("")
        
    }
  return (
    <div>
      <input value={input} type='text' onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default ADDTodos

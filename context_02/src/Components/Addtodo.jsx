import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function Addtodo() {
    const[input,setInput]=useState("")
    const { setTodo }=useTodo()
    function handleSubmit(e){
        e.preventDefault()
        if(!input) return//early failing
        setTodo({id:Date.now(),todo:input,completed:false})
        setInput(" ")
    }
  return (
    <div className='relative flex content-center justify-center items-center mt-16 '>
      <input className='w-[600px] h-12 rounded-2xl text-2xl forced-color-adjust-none' type='text' onChange={(e)=>setInput(e.target.value)} value={input}></input>
      <button onClick={handleSubmit} className='mx-3 bg-black text-white h-12 w-24 rounded-2xl'> ADD </button>
    </div>
  )
}

export default Addtodo

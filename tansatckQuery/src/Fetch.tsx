import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addTodo, fetchTodos } from "./api"
import { useState } from "react"


function Fetch() {
    const [title,setTitle]=useState("")
    const [search,setSearch]=useState("")
    //we need to clear the cache to refretch and client have the acces to it 
    const queryClient = useQueryClient()
    const {isError,isLoading,data:Todos} =useQuery({
        queryKey:["Todos",{search}],
        queryFn:()=>fetchTodos(search)
    })

    const { mutateAsync:AddTodo }=useMutation({
        mutationFn:addTodo,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["Todos"]})
        }
    })


    if(isError){
        return <div>error happend</div>
    }
  return (
    <div>
    
      <h1>TankStack query!!</h1>
      <div>
        <input 
        value={title}
        type="text"
        onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={async()=>{
            const res =await AddTodo({title:title})
            setTitle("")
            console.log(res);
            
        }}>add</button>
      </div>
      <input
      value={search}
      type="text"
      onChange={(e)=>setSearch(e.target.value)}/>
      {isLoading &&<div>loading...</div>}
      {!isLoading &&  Todos?.map(todo=>{
        return <div key={todo.id}>{todo.title}</div>
      })}
    </div>
  )
}

export default Fetch

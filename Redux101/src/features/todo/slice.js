import { createSlice ,nanoid} from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
};


export const todoSlice=createSlice({
    //name is important here
    name:"todo",
    initialState,
    //reducers(slices)
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                todo:action.payload.todo,
                completed:action.payload.completed
            }
            //we even don't need to sprad it to add 
            state.todos.unshift(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(prvTodo=>prvTodo.id!==action.payload.id)
            
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map(prevTodo=>prevTodo.id===action.payload.id?{...prevTodo,todo:action.payload.todo}:prevTodo)
        }
    }
})


export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
//store need the knowlege off all reducer to manage the state!!
export default todoSlice.reducer;
import { createContext, useContext } from "react";
//crete the context with default values
export const todoContext = createContext({
    Todos:[{
        id:1,
        todo:"Consistncy you will learn what is neeeded and earn fro htat"    ,
        completed:false
    }],
    //we wrote functioonalyu where we warap this 
    setTodo:(todo)=>{},
    removeTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toddgled:(id)=>{},
   

})
// make the customized hook to use context hook without importin twice!!


export function useTodo(){
    return useContext(todoContext)
}

export const TodoProvider=todoContext.Provider;
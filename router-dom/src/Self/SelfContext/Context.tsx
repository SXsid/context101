import { createContext, useContext, useState } from "react";
type User={
    id:number //the id from the db in the case 
}

const SelfAuthContext=createContext<User|null>(null)
export const useSelfAuth=()=>{
    const contex=useContext(SelfAuthContext)
    if(contex===undefined){
        throw new Error("context get the undefined value")
    }
    return contex
}
export const SelfAuthProvider=({children,isLoggedIn}:{children:React.ReactNode,isLoggedIn:boolean})=>{
    const [user]=useState<User|null>(isLoggedIn?{id:1}:null)
    return <SelfAuthContext.Provider value={user}>{children}</SelfAuthContext.Provider>
}
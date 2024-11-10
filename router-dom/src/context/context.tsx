import { createContext, PropsWithChildren, useContext, useState } from "react"

type AuthProviderProps= PropsWithChildren&{
    isLoggedIn?:boolean
}
type User={
    id:number
}

export const AuthContext = createContext<User|null>(null)
export const AuthContextProvider= ({children,isLoggedIn}:AuthProviderProps)=>{
    const [user]=useState<User|null>(isLoggedIn? {id:1}:null)
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
export default function useAuth(){
    const context = useContext(AuthContext)
    if(context===undefined){
        throw new Error( "plzz have a user context")
    }
    return context
}
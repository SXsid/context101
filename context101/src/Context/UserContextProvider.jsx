// use the context objext to create a providder

import { useState } from "react";
import UserContext from "./UserContext";

// the context weher it will wrap 1) all the thing wchich wil wrap in the provider componet and acces the data 2) data is the stae whcih will share accros the componet it will wrap 
const UserContextProvider = ({children})=>{
    const [user,setUser]=useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider;
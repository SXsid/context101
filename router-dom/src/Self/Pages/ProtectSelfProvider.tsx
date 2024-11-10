import { Navigate } from "react-router-dom"
import { useSelfAuth } from "../SelfContext/Context"


function ProtectSelfProvider({children}:{children:React.ReactNode}) {
    const user =useSelfAuth()
    if(user===null){
        return<Navigate to={"/auth/sigin"} ></Navigate>
    }
    return<div>{children}</div>
    
}

export default ProtectSelfProvider

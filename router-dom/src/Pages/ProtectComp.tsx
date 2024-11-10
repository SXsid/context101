import { PropsWithChildren } from "react"
import useAuth from "../context/context"
import { Navigate } from "react-router-dom"


export default function ProtectComp({children}:PropsWithChildren) {
    const user =useAuth()
    if(user===null){
        Navigate({to:"/",replace:true})
        return
    }
  return (
    <div>
      {children}
    </div>
  )
}

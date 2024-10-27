import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    // we can acces it by usercontxt objext only if the login is wrap inside the contxt provider 
    const { setUser }= useContext(UserContext)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handelSubmit=(e)=>{
        e.preventDefault( )
        setUser({email,password})
        setEmail("")
        setPassword("")
    }
  return (
    <div style={{width:"200px", margin:"40px"}}>
        <h1>Login</h1>
        <input placeholder='email' type='text'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        
        <input placeholder='password' type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
    
        <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login

import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user,setUser}=useContext(UserContext)
    //early failng 
    function handelSubmit(e){
        e.preventDefault()
        setUser(null)
    }
    if(!user) return <h1>plzz login !!</h1>
  return (
    <div>
      <h1>Creadentails</h1>  
      <h2>Email:{user.email}</h2>
      <h3>{user.password}</h3>
      <button onClick={handelSubmit}>logout</button>
    </div>
  )
}

export default Profile

import { Link, Outlet } from "react-router-dom"


function Profile() {
  const Reesl=[1,2,3,4,5,]
  return (
    <div style={{display:"flex" ,justifyContent:"space-between"}}>
      <div>
      hi profiel
      <h1>Reeels SEctions</h1>
     <div style={{display:"flex",flexDirection:"column" }}>
     {Reesl.map(reel=>{
        return(
          <Link style={{margin:"20px",}}  key={reel} to={`/Profile/${reel}`}>{reel}</Link>
        )
      })}
     </div>
      </div>
     <h1>
      <Outlet/>
     </h1>
    </div>
  )
}

export default Profile

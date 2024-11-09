import {  NavLink, Outlet } from "react-router-dom"


function HomePage() {
  const pages=["homepage","reels","profile"]
  return (
    <div style={{display:"flex"}}>
     <div style={{display:"flex",flexDirection:"column" }}>
     {pages.map((page)=>{
        return(
          <NavLink  style={{margin:"20px"}} to={`/${page}`}>{page}</NavLink>
        )
      })}
     </div>
     <Outlet/>
    </div>
  )
}

export default HomePage

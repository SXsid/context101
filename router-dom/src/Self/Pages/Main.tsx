import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Profiles from "./profile"
import Signin from "./Signin"
import ProtectSelfProvider from "./ProtectSelfProvider"


function Main() {
    const routes =createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            errorElement:<div>404 Not Found <Link to={"/"}>GO Back</Link></div>
        },{
            path:"/profiles",
            element:<ProtectSelfProvider><Profiles/></ProtectSelfProvider>
        },{
            path:"/auth/sigin",
            element:<Signin/>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  )
}

export default Main

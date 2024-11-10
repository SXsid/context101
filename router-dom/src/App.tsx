import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Profile from "./Pages/Profile"
import Reels from "./Pages/Reels"
import NotFound from "./Pages/NotFound"
import ProtectComp from "./Pages/ProtectComp"


function App() {
  
  const routes= createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>,
      errorElement:<NotFound/>,
      children:[
        {
          path:"/homepage",
          element:<ProtectComp><HomePage/></ProtectComp>

        },
        {
          path:"/reels",
          element:<ProtectComp><Reels/></ProtectComp>
        },{
          path:"/profile",
          element:<Profile/>
        }
      ]
    },
    {
      path:"/profile",
      element:<Profile/>,
      children:[{
      path:"/profile/:id",
      element:<Reels/>
    }]
    },
    
  ])
  return(

    //THE OLD WAY
    // <BrowserRouter>
    // <Routes>
    // <Route path="/" element={<HomePage/>}/>
    // <Route path="/Profile" element={<Profile/>}/>
    // </Routes>
    
    // </BrowserRouter>

    // ### NEW WAY##
    <RouterProvider router={routes}>

    </RouterProvider>
  )
}

export default App
